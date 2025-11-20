import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from datetime import datetime

# Use default fonts instead of Arial
print("Using default system fonts")

# Define styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'Title',
    parent=styles['Heading1'],
    fontSize=20,
    spaceAfter=20,
    textColor=colors.HexColor('#1E3A8A'),  # Dark blue
    fontName='Helvetica-Bold'
)

subtitle_style = ParagraphStyle(
    'Subtitle',
    parent=styles['Heading2'],
    fontSize=14,
    spaceAfter=15,
    textColor=colors.HexColor('#2563EB'),  # Blue
    fontName='Helvetica-Bold'
)

heading_style = ParagraphStyle(
    'Heading',
    parent=styles['Heading3'],
    fontSize=12,
    spaceAfter=10,
    textColor=colors.HexColor('#1E40AF'),  # Darker blue
    fontName='Helvetica-Bold'
)

body_style = ParagraphStyle(
    'Body',
    parent=styles['Normal'],
    fontSize=10,
    spaceAfter=12,
    leading=14,
    fontName='Helvetica'
)

def add_cover_page(elements, title, subtitle, category):
    """Add a standardized cover page to the PDF."""
    elements.append(Paragraph(title, title_style))
    elements.append(Spacer(1, 20))
    elements.append(Paragraph(subtitle, subtitle_style))
    elements.append(Spacer(1, 40))
    elements.append(Paragraph("Centre de Biologie d'Agadir", body_style))
    elements.append(Paragraph(f"Catégorie : {category}", body_style))
    elements.append(Paragraph(f"Dernière mise à jour : {datetime.now().strftime('%d/%m/%Y')}", body_style))
    elements.append(PageBreak())

def add_table_of_contents(elements, toc_data):
    """Add a table of contents with page numbers."""
    elements.append(Paragraph("Table des matières", title_style))
    elements.append(Spacer(1, 20))
    
    # Create TOC table
    toc_table = []
    for item in toc_data:
        toc_table.append([
            Paragraph(item[0], ParagraphStyle('TOC', parent=body_style, leftIndent=20*item[0].count('  '))),
            Paragraph(item[1], ParagraphStyle('TOC', parent=body_style, alignment=2))
        ])
    
    t = Table(toc_table, colWidths=[400, 50])
    t.setStyle(TableStyle([
        ('FONT', (0, 0), (-1, -1), 'Helvetica', 10),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (0, -1), 0),
        ('LEFTPADDING', (1, 0), (1, -1), 20),
        ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
    ]))
    elements.append(t)
    elements.append(PageBreak())

def add_section(elements, title, level=1):
    """Add a section header with appropriate styling."""
    if level == 1:
        elements.append(Paragraph(title, title_style))
    elif level == 2:
        elements.append(Paragraph(title, subtitle_style))
    else:
        elements.append(Paragraph(title, heading_style))
    elements.append(Spacer(1, 10))

def create_blood_test_guide():
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide Complet des Analyses Sanguines",
        "Comprendre et interpréter vos résultats d'analyses",
        "Hématologie"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Les bases de l'hématologie", "4"],
        ["  2.1 Numération Formule Sanguine (NFS)", "5"],
        ["  2.2 Hémogramme complet", "7"],
        ["  2.3 Bilan de coagulation", "9"],
        ["3. Interprétation des résultats", "11"],
        ["  3.1 Hématies et hémoglobine", "12"],
        ["  3.2 Leucocytes et formule leucocytaire", "14"],
        ["  3.3 Plaquettes et coagulation", "16"],
        ["4. Marqueurs spécifiques", "18"],
        ["  4.1 Marqueurs inflammatoires", "18"],
        ["  4.2 Marqueurs nutritionnels", "20"],
        ["5. Cas cliniques", "22"],
        ["6. Foire aux questions", "25"],
        ["7. Glossaire médical", "27"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Ce guide complet a été conçu pour vous aider à mieux comprendre les analyses sanguines courantes. 
    Vous y trouverez des explications claires sur les différents paramètres mesurés, leurs valeurs 
    de référence, et leur signification clinique.
    """, body_style))
    
    elements.append(Paragraph("<b>Comment utiliser ce guide :</b>", heading_style))
    elements.append(Paragraph("""
    • Consultez le glossaire pour les termes techniques<br/>
    • Reportez-vous aux tableaux de valeurs de référence<br/>
    • Utilisez les cas cliniques pour mieux comprendre l'interprétation<br/>
    • Consultez toujours votre médecin pour l'interprétation de vos résultats
    """, body_style))
    
    elements.append(PageBreak())
    
    # 2. Les bases de l'hématologie
    add_section(elements, "2. Les bases de l'hématologie", 1)
    
    # 2.1 NFS
    add_section(elements, "2.1 Numération Formule Sanguine (NFS)", 2)
    elements.append(Paragraph("""
    La Numération Formule Sanguine (NFS) est l'examen biologique le plus prescrit. 
    Elle permet d'évaluer les trois principales lignées cellulaires du sang :
    """, body_style))
    
    elements.append(Paragraph("• <b>Les globules rouges (hématies)</b> : Transportent l'oxygène des poumons vers les tissus", body_style))
    elements.append(Paragraph("• <b>Les globules blancs (leucocytes)</b> : Défendent l'organisme contre les infections", body_style))
    elements.append(Paragraph("• <b>Les plaquettes (thrombocytes)</b> : Interviennent dans la coagulation sanguine", body_style))
    
    # Add NFS reference table
    nfs_data = [
        ['Paramètre', 'Valeurs de référence', 'Signification clinique'],
        ['Hémoglobine (Hb)', '13-17 g/dL (H), 12-16 g/dL (F)', 'Anémie si bas, polyglobulie si élevé'],
        ['Hématocrite (Ht)', '40-52% (H), 36-48% (F)', 'Proportion de globules rouges dans le sang'],
        ['VGM', '80-100 fL', 'Taille moyenne des globules rouges'],
        ['CMH', '27-34 pg', 'Quantité moyenne d\'hémoglobine par globule rouge'],
        ['Leucocytes', '4 000 - 10 000/mm³', 'Défense contre les infections'],
        ['Plaquettes', '150 000 - 400 000/mm³', 'Coagulation sanguine']
    ]
    
    t = Table(nfs_data, colWidths=[120, 120, 240])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 8),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # Add more sections with detailed content...
    
    # Footer
    elements.append(PageBreak())
    elements.append(Paragraph("Laboratoire CBA - Centre de Biologie et d'Analyses", body_style))
    elements.append(Paragraph("Expertise en hématologie et analyses médicales", body_style))
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Bienvenue dans ce guide complet sur les analyses sanguines. Ce document a été conçu pour vous aider à mieux comprendre 
    les différents paramètres mesurés lors d'une prise de sang, leurs significations cliniques, et leur interprétation.
    """, body_style))
    
    elements.append(Paragraph("<b>Comment utiliser ce guide :</b>", heading_style))
    elements.append(Paragraph("""
    • Consultez le glossaire pour les termes techniques<br/>
    • Reportez-vous aux tableaux de valeurs de référence<br/>
    • Utilisez les cas cliniques pour mieux comprendre l'interprétation<br/>
    • Consultez toujours votre médecin pour l'interprétation de vos résultats
    """, body_style))
    
    elements.append(Paragraph("<b>Points clés :</b>", heading_style))
    elements.append(Paragraph("""
    • Comprendre les différentes composantes d'une analyse sanguine<br/>
    • Savoir interpréter les résultats en fonction des normes<br/>
    • Identifier les situations nécessitant une consultation médicale<br/>
    • Connaître les facteurs pouvant influencer les résultats
    """, body_style))
    
    elements.append(PageBreak())
    
    # 2. Les bases de l'hématologie
    add_section(elements, "2. Les bases de l'hématologie", 1)
    
    # 2.1 NFS
    add_section(elements, "2.1 Numération Formule Sanguine (NFS)", 2)
    
    # Add NFS explanation
    elements.append(Paragraph("""
    La Numération Formule Sanguine (NFS), également appelée hémogramme, est l'examen biologique le plus prescrit. 
    Elle permet d'évaluer les trois principales lignées cellulaires du sang :
    """, body_style))
    
    # Add bullet points
    elements.append(Paragraph("• <b>Les globules rouges (hématies)</b> : Transportent l'oxygène des poumons vers les tissus", body_style))
    elements.append(Paragraph("• <b>Les globules blancs (leucocytes)</b> : Défendent l'organisme contre les infections", body_style))
    elements.append(Paragraph("• <b>Les plaquettes (thrombocytes)</b> : Interviennent dans la coagulation sanguine", body_style))
    
    # Add NFS reference table
    nfs_data = [
        ['Paramètre', 'Valeurs de référence', 'Signification clinique'],
        ['Hémoglobine (Hb)', '13-17 g/dL (H), 12-16 g/dL (F)', 'Anémie si bas, polyglobulie si élevé'],
        ['Hématocrite (Ht)', '40-52% (H), 36-48% (F)', 'Proportion de globules rouges dans le sang'],
        ['VGM', '80-100 fL', 'Taille moyenne des globules rouges'],
        ['CMH', '27-34 pg', 'Quantité moyenne d\'hémoglobine par globule rouge'],
        ['Leucocytes', '4 000 - 10 000/mm³', 'Défense contre les infections'],
        ['Plaquettes', '150 000 - 400 000/mm³', 'Coagulation sanguine']
    ]
    
    t = Table(nfs_data, colWidths=[120, 120, 280])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 8),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # Add more sections...
    
    return elements

def create_kidney_guide():
    """Create a comprehensive kidney function guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide de la Fonction Rénale",
        "Comprendre et interpréter les analyses rénales",
        "Néphrologie"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Comprendre la fonction rénale", "4"],
        ["3. Examens clés de la fonction rénale", "6"],
        ["  3.1 Créatinine et clairance de la créatinine", "6"],
        ["  3.2 Urée et acide urique", "8"],
        ["  3.3 Protéinurie et microalbuminurie", "10"],
        ["4. Facteurs de risque et prévention", "12"],
        ["5. Suivi des patients à risque", "14"],
        ["6. Foire aux questions", "16"],
        ["7. Glossaire", "18"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Les reins sont des organes vitaux qui jouent un rôle essentiel dans le maintien de l'équilibre de notre organisme. 
    Ce guide complet a été conçu pour vous aider à comprendre les différents marqueurs de la fonction rénale, 
    leurs significations et leur importance dans le suivi de votre santé rénale.
    """, body_style))
    
    elements.append(Paragraph("<b>Pourquoi surveiller sa fonction rénale ?</b>", heading_style))
    elements.append(Paragraph("""
    • <b>Détection précoce</b> des problèmes rénaux avant l'apparition des symptômes<br/>
    • <b>Suivi des maladies chroniques</b> comme le diabète et l'hypertension, principales causes d'insuffisance rénale<br/>
    • <b>Évaluation de l'efficacité</b> des traitements rénaux et ajustement des posologies<br/>
    • <b>Prévention des complications</b> liées à une mauvaise fonction rénale (anémie, troubles osseux, etc.)
    """, body_style))
    
    elements.append(Paragraph("""
    <b>Les maladies rénales sont souvent silencieuses</b> et ne provoquent des symptômes qu'à un stade avancé. 
    C'est pourquoi un dépistage régulier est essentiel, particulièrement pour les personnes à risque.
    """, body_style))
    
    elements.append(PageBreak())
    
    # 2. Comprendre la fonction rénale
    add_section(elements, "2. Comprendre la fonction rénale", 1)
    elements.append(Paragraph("""
    Les reins sont des organes en forme de haricot, situés de part et d'autre de la colonne vertébrale, 
    sous les côtes. Chaque rein contient environ un million de néphrons, les unités fonctionnelles du rein.
    """, body_style))
    
    elements.append(Paragraph("<b>Fonctions principales des reins :</b>", heading_style))
    
    # Add kidney functions table
    kidney_functions = [
        ['Fonction', 'Description', 'Conséquences en cas de dysfonctionnement'],
        ['<b>Épuration</b>', 'Filtration des déchets du sang (urée, créatinine, etc.)', 'Accumulation de toxines dans l\'organisme (urémie)'],
        ['<b>Régulation hydrique</b>', 'Maintien du volume sanguin et de la pression artérielle', 'Œdèmes, hypertension artérielle, déshydratation'],
        ['<b>Équilibre électrolytique</b>', 'Régulation des sels minéraux (Na+, K+, Ca2+, etc.)', 'Troubles du rythme cardiaque, faiblesse musculaire, convulsions'],
        ['<b>Équilibre acido-basique</b>', 'Maintien du pH sanguin', 'Acidose métabolique, troubles de la coagulation'],
        ['<b>Production d\'hormones</b>', 'Érythropoïétine, rénine, vitamine D active', 'Anémie, hypertension, ostéoporose']
    ]
    
    t = Table(kidney_functions, colWidths=[100, 200, 200])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),  # Light blue header
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),  # Dark blue text
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),  # Very light blue
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),  # Dark gray text
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),  # Light gray grid
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),  # Border
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    elements.append(Paragraph("<b>Les principaux examens de la fonction rénale :</b>", heading_style))
    elements.append(Paragraph("""
    1. <b>Créatinine sérique</b> : Marqueur de la fonction de filtration glomérulaire<br/>
    2. <b>Urée sanguine</b> : Reflète l'élimination des déchets azotés<br/>
    3. <b>Débit de filtration glomérulaire (DFG)</b> : Meilleur indicateur de la fonction rénale<br/>
    4. <b>Protéinurie/albuminurie</b> : Marqueur de lésion rénale<br/>
    5. <b>Ionogramme sanguin</b> : Équilibre électrolytique (Na+, K+, Cl-, HCO3-)<n/>
    """, body_style))
    
    elements.append(PageBreak())
    
    # 3. Examens clés de la fonction rénale
    add_section(elements, "3. Examens clés de la fonction rénale", 1)
    
    # 3.1 Créatinine et clairance de la créatinine
    add_section(elements, "3.1 Créatinine et clairance de la créatinine", 2)
    elements.append(Paragraph("""
    <b>Créatinine sérique</b><br/>
    Déchet métabolique éliminé par les reins. Son taux sanguin augmente lorsque la fonction rénale diminue.
    """, body_style))
    
    creatinine_table = [
        ['Valeurs de référence', 'Interprétation'],
        ['6 - 13 mg/L (H), 4 - 10 mg/L (F)', 'Valeurs normales'],
        ['13 - 20 mg/L', 'Insuffisance rénale légère'],
        ['20 - 40 mg/L', 'Insuffisance rénale modérée'],
        ['> 40 mg/L', 'Insuffisance rénale sévère']
    ]
    
    t = Table(creatinine_table, colWidths=[200, 300])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),  # Light blue header
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),  # Dark blue text
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),  # Very light blue
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),  # Light blue grid
    ]))
    elements.append(t)
    
    elements.append(Paragraph("""
    <b>Clairance de la créatinine</b><br/>
    La clairance de la créatinine est le volume de plasma épuré de sa créatinine par unité de temps. 
    Elle est calculée à partir de la formule CKD-EPI ou MDRD, qui prennent en compte l'âge, le sexe, 
    le poids et l'origine ethnique.
    """, body_style))
    
    # Add clearance stages table
    clearance_stages = [
        ['Stade', 'DFG (mL/min/1.73m²)', 'Description'],
        ['1', '≥ 90', "Fonction rénale normale avec marqueurs d'atteinte rénale"],
        ['2', '60-89', 'Insuffisance rénale légère'],
        ['3a', '45-59', 'Insuffisance rénale modérée (stade A)'],
        ['3b', '30-44', 'Insuffisance rénale modérée (stade B)'],
        ['4', '15-29', 'Insuffisance rénale sévère'],
        ['5', '< 15', 'Insuffisance rénale terminale ou dialyse']
    ]
    
    t = Table(clearance_stages, colWidths=[50, 100, 350])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 3.2 Urée et acide urique
    add_section(elements, "3.2 Urée et acide urique", 2)
    elements.append(Paragraph("""
    <b>Urée sanguine (Urémie)</b><br/>
    L'urée est le principal déchet azoté issu de la dégradation des protéines. Son taux sanguin dépend 
    de la fonction rénale mais aussi de facteurs non rénaux comme l'alimentation et l'hydratation.
    """, body_style))
    
    elements.append(Paragraph("<b>Valeurs de référence : 0.15 - 0.40 g/L (2.5 - 6.6 mmol/L)</b>", body_style))
    
    elements.append(Paragraph("""
    <b>Acide urique</b><br/>
    Dérivé du métabolisme des purines, son taux sanguin peut augmenter en cas de diminution de 
    l'élimination rénale ou de production excessive.
    """, body_style))
    
    elements.append(Paragraph("<b>Valeurs de référence :</b> 30-70 mg/L (180-420 µmol/L) chez l'homme, 20-60 mg/L (120-360 µmol/L) chez la femme", body_style))
    
    # 3.3 Protéinurie et microalbuminurie
    add_section(elements, "3.3 Protéinurie et microalbuminurie", 2)
    elements.append(Paragraph("""
    <b>Protéinurie</b> : Présence anormale de protéines dans les urines, marqueur précoce d'atteinte rénale.<br/>
    <b>Microalbuminurie</b> : Détection de faibles quantités d'albumine dans les urines, signe précoce de néphropathie.
    """, body_style))
    
    proteinuria_table = [
        ['Type', 'Valeurs', 'Signification clinique'],
        ['Protéinurie normale', '< 150 mg/24h', 'Valeurs physiologiques'],
        ['Microalbuminurie', '30-300 mg/24h', 'Atteinte rénale débutante'],
        ['Protéinurie modérée', '300 mg - 3 g/24h', 'Atteinte rénale établie'],
        ['Protéinurie massive', '> 3 g/24h', 'Syndrome néphrotique']
    ]
    
    t = Table(proteinuria_table, colWidths=[100, 100, 300])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 4. Facteurs de risque et prévention
    add_section(elements, "4. Facteurs de risque et prévention", 1)
    elements.append(Paragraph("<b>Principaux facteurs de risque d'insuffisance rénale :</b>", heading_style))
    
    risk_factors = [
        ['Facteur de risque', 'Impact sur la fonction rénale', 'Actions préventives'],
        ['Diabète sucré', 'Néphropathie diabétique', 'Contrôle glycémique strict, dépistage annuel de la microalbuminurie'],
        ['Hypertension artérielle', 'Néphroangiosclérose', 'Contrôle tensionnel < 140/90 mmHg, voire < 130/80 en cas de protéinurie'],
        ['Âge > 60 ans', 'Diminution physiologique du DFG', 'Surveillance régulière de la fonction rénale'],
        ['Antécédents familiaux', 'Prédisposition génétique', 'Dépistage précoce, prévention des facteurs modifiables'],
        ['Médicaments néphrotoxiques', 'Lésions rénales aiguës ou chroniques', 'Surveillance de la fonction rénale, adaptation des posologies']
    ]
    
    t = Table(risk_factors, colWidths=[100, 150, 250])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # Footer
    elements.append(PageBreak())
    elements.append(Paragraph("Laboratoire CBA - Centre de Biologie et d'Analyses", body_style))
    elements.append(Paragraph("Expertise en néphrologie et urologie | Tél: 05 28 21 21 21 | contact@cba.ma", body_style))
    elements.append(Paragraph("Dernière mise à jour : " + datetime.now().strftime("%d/%m/%Y"), body_style))
    
    return elements

def create_diabetes_guide():
    """Create a comprehensive diabetes testing guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide Complet du Dépistage et du Suivi du Diabète",
        "Tout savoir sur le diagnostic, la prévention et la prise en charge du diabète",
        "Diabétologie et Endocrinologie"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Comprendre le diabète", "4"],
        ["  2.1 Types de diabète", "4"],
        ["  2.2 Facteurs de risque", "5"],
        ["  2.3 Complications possibles", "6"],
        ["3. Tests de dépistage et diagnostic", "7"],
        ["  3.1 Glycémie à jeun", "7"],
        ["  3.2 Hémoglobine glyquée (HbA1c)", "9"],
        ["  3.3 Hyperglycémie provoquée par voie orale (HGPO)", "11"],
        ["  3.4 Autres marqueurs", "13"],
        ["4. Interprétation des résultats", "14"],
        ["5. Prévention et mode de vie", "16"],
        ["6. Prise en charge thérapeutique", "18"],
        ["7. Surveillance et suivi", "20"],
        ["8. Foire aux questions", "22"],
        ["9. Glossaire et ressources", "24"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Le diabète est une maladie chronique caractérisée par un excès de sucre dans le sang (hyperglycémie) dû à 
    un défaut de sécrétion ou d'action de l'insuline. Ce guide complet a pour objectif de vous fournir des 
    informations claires et détaillées sur le dépistage, le diagnostic et la prise en charge du diabète.
    """, body_style))
    
    elements.append(Paragraph("<b>Pourquoi ce guide est-il important ?</b>", heading_style))
    elements.append(Paragraph("""
    • Comprendre les différents types de diabète et leurs spécificités<br/>
    • Connaître les examens de dépistage et leur interprétation<br/>
    • Prévenir les complications grâce à une prise en charge précoce<br/>
    • Adopter les bons réflexes pour équilibrer sa glycémie
    """, body_style))
    
    elements.append(Paragraph("""
    <b>Le dépistage précoce du diabète est essentiel</b> car la maladie peut évoluer silencieusement 
    pendant plusieurs années avant l'apparition des premiers symptômes. Un diagnostic et une prise en charge 
    précoces permettent de prévenir ou de retarder les complications.
    """, body_style))
    
    elements.append(PageBreak())
    
    # 2. Comprendre le diabète
    add_section(elements, "2. Comprendre le diabète", 1)
    
    # 2.1 Types de diabète
    add_section(elements, "2.1 Types de diabète", 2)
    
    diabetes_types = [
        ['Type', 'Description', 'Âge de survenue', 'Traitement'],
        ['<b>Diabète de type 1</b>', 
         'Maladie auto-immune détruisant les cellules bêta du pancréas', 
         'Enfance/Adolescence', 
         'Insuline obligatoire'],
        ['<b>Diabète de type 2</b>', 
         'Résistance à l\'insuline et déficit relatif en insuline', 
         'Adulte (souvent après 40 ans)', 
         'Régime, activité physique, antidiabétiques oraux, parfois insuline'],
        ['<b>Diabète gestationnel</b>', 
         'Hyperglycémie apparaissant pendant la grossesse', 
         'Femmes enceintes', 
         'Régime, activité physique, parfois insuline'],
        ['<b>Autres types spécifiques</b>', 
         'Maladies du pancréas, génétiques, ou induits par des médicaments', 
         'Variable', 
         'Selon la cause']
    ]
    
    t = Table(diabetes_types, colWidths=[100, 150, 100, 150])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 2.2 Facteurs de risque
    add_section(elements, "2.2 Facteurs de risque", 2)
    elements.append(Paragraph("<b>Facteurs de risque non modifiables :</b>", heading_style))
    elements.append(Paragraph("""
    • Âge > 45 ans<br/>
    • Antécédents familiaux de diabète (parent au 1er degré)<br/>
    • Origine ethnique à risque (africaine, hispanique, asiatique, moyen-orientale)<br/>
    • Antécédent de diabète gestationnel ou d'enfant de poids de naissance > 4 kg
    """, body_style))
    
    elements.append(Paragraph("<b>Facteurs de risque modifiables :</b>", heading_style))
    elements.append(Paragraph("""
    • Surpoids (IMC ≥ 25 kg/m²) ou obésité (IMC ≥ 30 kg/m²)<br/>
    • Sédentarité (moins de 150 minutes d'activité physique par semaine)<br/>
    • Hypertension artérielle (≥ 140/90 mmHg)<br/>
    • Dyslipidémie (HDL < 0,40 g/L et/ou triglycérides > 2 g/L)<br/>
    • Syndrome des ovaires polykystiques<br/>
    • Tabagisme
    """, body_style))
    
    # 2.3 Complications possibles
    add_section(elements, "2.3 Complications possibles", 2)
    
    complications = [
        ['Type de complication', 'Exemples', 'Prévention'],
        ['<b>Microvasculaires</b>', 
         'Rétinopathie diabétique<br/>Néphropathie diabétique<br/>Neuropathie diabétique', 
         'Contrôle glycémique strict<br/>Contrôle tensionnel<br/>Examen annuel du fond d\'œil'],
        ['<b>Macrovasculaires</b>', 
         'Maladie coronarienne<br/>Accident vasculaire cérébral<br/>Artérite des membres inférieurs', 
         'Arrêt du tabac<br/>Contrôle des lipides sanguins<br/>Activité physique régulière'],
        ['<b>Autres</b>', 
         'Infections<br/>Troubles de la cicatrisation<br/>Problèmes dentaires', 
         'Hygiène rigoureuse<br/>Soins des pieds quotidiens<br/>Bilans dentaires réguliers']
    ]
    
    t = Table(complications, colWidths=[100, 200, 200])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(PageBreak())
    
    # 3. Tests de dépistage et diagnostic
    add_section(elements, "3. Tests de dépistage et diagnostic", 1)
    
    # 3.1 Glycémie à jeun
    add_section(elements, "3.1 Glycémie à jeun", 2)
    elements.append(Paragraph("""
    La glycémie à jeun est le dosage de la concentration de glucose dans le sang après un jeûne d'au moins 8 heures. 
    C'est l'examen de première intention pour le dépistage du diabète.
    """, body_style))
    
    elements.append(Paragraph("<b>Conditions de prélèvement :</b>", heading_style))
    elements.append(Paragraph("""
    • Jeûne strict de 8 à 12 heures (eau autorisée)<br/>
    • Prélèvement veineux de préférence le matin<br/>
    • Éviter les efforts physiques intenses la veille
    """, body_style))
    
    elements.append(Paragraph("<b>Interprétation des résultats :</b>", heading_style))
    
    glycemia_table = [
        ['Résultat', 'Glycémie à jeun', 'Signification'],
        ['<b>Normal</b>', '< 1,10 g/L (6,1 mmol/L)', 'Pas de diabète'],
        ['<b>Hyperglycémie modérée à jeun</b>', '1,10 à 1,25 g/L (6,1 à 6,9 mmol/L)', 'Risque accru de diabète'],
        ['<b>Diabète</b>', '≥ 1,26 g/L (7,0 mmol/L) à deux reprises', 'Diabète confirmé']
    ]
    
    t = Table(glycemia_table, colWidths=[120, 120, 260])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    elements.append(t)
    
    # Add more sections for other tests...
    
    # Footer
    elements.append(PageBreak())
    elements.append(Paragraph("Laboratoire CBA - Centre de Biologie et d'Analyses", body_style))
    elements.append(Paragraph("Expertise en diabétologie et endocrinologie | Tél: 05 28 21 21 21 | contact@cba.ma", body_style))
    elements.append(Paragraph("Dernière mise à jour : " + datetime.now().strftime("%d/%m/%Y"), body_style))
    
    return elements

def create_kidney_guide():
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Anatomie et physiologie rénale", "4"],
        ["3. Examens clés de la fonction rénale", "5"],
        ["  3.1 Créatinine et clairance de la créatinine", "5"],
        ["  3.2 Urée et acide urique", "6"],
        ["  3.3 Débit de filtration glomérulaire (DFG)", "7"],
        ["  3.4 Protéinurie et microalbuminurie", "8"],
        ["  3.5 Analyse d'urine complète (ECBU)", "9"],
        ["4. Interprétation des résultats", "10"],
        ["5. Prévention des maladies rénales", "12"],
        ["6. Suivi des patients à risque", "14"],
        ["7. Foire aux questions", "16"],
        ["8. Glossaire", "18"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Les reins sont des organes vitaux qui jouent un rôle essentiel dans le maintien de l'équilibre de notre organisme. 
    Ce guide complet a été conçu pour vous aider à comprendre les différents marqueurs de la fonction rénale, 
    leurs significations et leur importance dans le suivi de votre santé rénale.
    """, body_style))
    
    elements.append(Paragraph("<b>Pourquoi surveiller sa fonction rénale ?</b>", heading_style))
    elements.append(Paragraph("""
    • <b>Détection précoce</b> des problèmes rénaux avant l'apparition des symptômes<br/>
    • <b>Suivi des maladies chroniques</b> comme le diabète et l'hypertension, principales causes d'insuffisance rénale<br/>
    • <b>Évaluation de l'efficacité</b> des traitements rénaux et ajustement des posologies<br/>
    • <b>Prévention des complications</b> liées à une mauvaise fonction rénale (anémie, troubles osseux, etc.)
    """, body_style))
    
    elements.append(Paragraph("""
    <b>Les maladies rénales sont souvent silencieuses</b> et ne provoquent des symptômes qu'à un stade avancé. 
    C'est pourquoi un dépistage régulier est essentiel, particulièrement pour les personnes à risque.
    """, body_style))
    
    elements.append(PageBreak())
    
    # 2. Comprendre la fonction rénale
    add_section(elements, "2. Comprendre la fonction rénale", 1)
    elements.append(Paragraph("""
    Les reins sont des organes en forme de haricot, situés de part et d'autre de la colonne vertébrale, 
    sous les côtes. Chaque rein contient environ un million de néphrons, les unités fonctionnelles du rein.
    """, body_style))
    
    elements.append(Paragraph("<b>Fonctions principales des reins :</b>", heading_style))
    
    # Add kidney functions table
    kidney_functions = [
        ['Fonction', 'Description', 'Conséquences en cas de dysfonctionnement'],
        ['<b>Épuration</b>', 'Filtration des déchets du sang (urée, créatinine, etc.)', 'Accumulation de toxines dans l\'organisme (urémie)'],
        ['<b>Régulation hydrique</b>', 'Maintien du volume sanguin et de la pression artérielle', 'Œdèmes, hypertension artérielle, déshydratation'],
        ['<b>Équilibre électrolytique</b>', 'Régulation des sels minéraux (Na+, K+, Ca2+, etc.)', 'Troubles du rythme cardiaque, faiblesse musculaire, convulsions'],
        ['<b>Équilibre acido-basique</b>', 'Maintien du pH sanguin', 'Acidose métabolique, troubles de la coagulation'],
        ['<b>Production d\'hormones</b>', 'Érythropoïétine, rénine, vitamine D active', 'Anémie, hypertension, ostéoporose']
    ]
    
    t = Table(kidney_functions, colWidths=[100, 200, 200])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),  # Light blue header
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),  # Dark blue text
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),  # Very light blue
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),  # Dark gray text
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),  # Light gray grid
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),  # Border
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    elements.append(Paragraph("<b>Les principaux examens de la fonction rénale :</b>", heading_style))
    elements.append(Paragraph("""
    1. <b>Créatinine sérique</b> : Marqueur de la fonction de filtration glomérulaire<br/>
    2. <b>Urée sanguine</b> : Reflète l'élimination des déchets azotés<br/>
    3. <b>Débit de filtration glomérulaire (DFG)</b> : Meilleur indicateur de la fonction rénale<br/>
    4. <b>Protéinurie/albuminurie</b> : Marqueur de lésion rénale<br/>
    5. <b>Ionogramme sanguin</b> : Équilibre électrolytique (Na+, K+, Cl-, HCO3-)<n/>
    """, body_style))
    
    # 2.1 Rôle des reins
    add_section(elements, "2.1 Rôle des reins dans l'organisme", 2)
    elements.append(Paragraph("""
    Les reins assurent plusieurs fonctions vitales :
    """, body_style))
    
    kidney_roles = [
        ["Fonction", "Description"],
        ["Filtration sanguine", "Élimination des déchets et toxines"],
        ["Régulation hydrique", "Maintien de l'équilibre hydrique"],
        ["Équilibre électrolytique", "Régulation du sodium, potassium, etc."],
        ["Pression artérielle", "Sécrétion de rénine"],
        ["Production d'érythropoïétine", "Stimulation de la production des globules rouges"],
        ["Métabolisme osseux", "Activation de la vitamine D"]
    ]
    
    t = Table(kidney_roles, colWidths=[150, 350])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 3. Examens clés de la fonction rénale
    add_section(elements, "3. Examens clés de la fonction rénale", 1)
    
    # 3.1 Créatinine et clairance de la créatinine
    add_section(elements, "3.1 Créatinine et clairance de la créatinine", 2)
    elements.append(Paragraph("""
    <b>Créatinine sérique</b><br/>
    Déchet métabolique éliminé par les reins. Son taux sanguin augmente lorsque la fonction rénale diminue.
    """, body_style))
    
    creatinine_table = [
        ['Valeurs de référence', 'Interprétation'],
        ['6 - 13 mg/L (H), 4 - 10 mg/L (F)', 'Valeurs normales'],
        ['13 - 20 mg/L', 'Insuffisance rénale légère'],
        ['20 - 40 mg/L', 'Insuffisance rénale modérée'],
        ['> 40 mg/L', 'Insuffisance rénale sévère']
    ]
    
    t = Table(creatinine_table, colWidths=[200, 300])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),  # Light blue header
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),  # Dark blue text
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),  # Very light blue
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),  # Light blue grid
    ]))
    elements.append(t)
    
    elements.append(Paragraph("""
    <b>Clairance de la créatinine</b><br/>
    La clairance de la créatinine est le volume de plasma épuré de sa créatinine par unité de temps. 
    Elle est calculée à partir de la formule CKD-EPI ou MDRD, qui prennent en compte l'âge, le sexe, 
    le poids et l'origine ethnique.
    """, body_style))
    
    # Add clearance stages table
    clearance_stages = [
        ['Stade', 'DFG (mL/min/1.73m²)', 'Description'],
        ['1', '≥ 90', "Fonction rénale normale avec marqueurs d'atteinte rénale"],
        ['2', '60-89', 'Insuffisance rénale légère'],
        ['3a', '45-59', 'Insuffisance rénale modérée (stade A)'],
        ['3b', '30-44', 'Insuffisance rénale modérée (stade B)'],
        ['4', '15-29', 'Insuffisance rénale sévère'],
        ['5', '< 15', 'Insuffisance rénale terminale ou dialyse']
    ]
    
    t = Table(clearance_stages, colWidths=[50, 100, 350])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 3.2 Urée et acide urique
    add_section(elements, "3.2 Urée et acide urique", 2)
    elements.append(Paragraph("""
    <b>Urée sanguine (Urémie)</b><br/>
    L'urée est le principal déchet azoté issu de la dégradation des protéines. Son taux sanguin dépend 
    de la fonction rénale mais aussi de facteurs non rénaux comme l'alimentation et l'hydratation.
    """, body_style))
    
    elements.append(Paragraph("<b>Valeurs de référence : 0.15 - 0.40 g/L (2.5 - 6.6 mmol/L)</b>", body_style))
    
    elements.append(Paragraph("""
    <b>Acide urique</b><br/>
    Dérivé du métabolisme des purines, son taux sanguin peut augmenter en cas de diminution de 
    l'élimination rénale ou de production excessive.
    """, body_style))
    
    elements.append(Paragraph("<b>Valeurs de référence :</b> 30-70 mg/L (180-420 µmol/L) chez l'homme, 20-60 mg/L (120-360 µmol/L) chez la femme", body_style))
    
    # 3.3 Protéinurie et microalbuminurie
    add_section(elements, "3.3 Protéinurie et microalbuminurie", 2)
    elements.append(Paragraph("""
    <b>Protéinurie</b> : Présence anormale de protéines dans les urines, marqueur précoce d'atteinte rénale.<br/>
    <b>Microalbuminurie</b> : Détection de faibles quantités d'albumine dans les urines, signe précoce de néphropathie.
    """, body_style))
    
    proteinuria_table = [
        ['Type', 'Valeurs', 'Signification clinique'],
        ['Protéinurie normale', '< 150 mg/24h', 'Valeurs physiologiques'],
        ['Microalbuminurie', '30-300 mg/24h', 'Atteinte rénale débutante'],
        ['Protéinurie modérée', '300 mg - 3 g/24h', 'Atteinte rénale établie'],
        ['Protéinurie massive', '> 3 g/24h', 'Syndrome néphrotique']
    ]
    
    t = Table(proteinuria_table, colWidths=[100, 100, 300])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#E0F2FE')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0369A1')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F0F9FF')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#BAE6FD')),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # 4. Facteurs de risque et prévention
    add_section(elements, "4. Facteurs de risque et prévention", 1)
    elements.append(Paragraph("<b>Principaux facteurs de risque d'insuffisance rénale :</b>", heading_style))
    
    risk_factors = [
        ['Facteur de risque', 'Impact sur la fonction rénale', 'Actions préventives'],
        ['Diabète sucré', 'Néphropathie diabétique', 'Contrôle glycémique strict, dépistage annuel de la microalbuminurie'],
        ['Hypertension artérielle', 'Néphroangiosclérose', 'Contrôle tensionnel < 140/90 mmHg, voire < 130/80 en cas de protéinurie'],
        ['Âge > 60 ans', 'Diminution physiologique du DFG', 'Surveillance régulière de la fonction rénale'],
        ['Antécédents familiaux', 'Prédisposition génétique', 'Dépistage précoce, prévention des facteurs modifiables'],
        ['Médicaments néphrotoxiques', 'Lésions rénales aiguës ou chroniques', 'Surveillance de la fonction rénale, adaptation des posologies']
    ]
    
    t = Table(risk_factors, colWidths=[100, 150, 250])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    # Footer
    elements.append(PageBreak())
    elements.append(Paragraph("Laboratoire CBA - Centre de Biologie et d'Analyses", body_style))
    elements.append(Paragraph("Expertise en néphrologie et urologie | Tél: 05 28 21 21 21 | contact@cba.ma", body_style))
    elements.append(Paragraph("Dernière mise à jour : " + datetime.now().strftime("%d/%m/%Y"), body_style))
    
    return elements
    elements.append(PageBreak())
    
    # Chapter 2: Les bases de l'hématologie
    elements.append(Paragraph("2. Les bases de l'hématologie", title_style))
    
    elements.append(Paragraph("2.1 Numération Formule Sanguine (NFS)", subtitle_style))
    elements.append(Paragraph("""
    La NFS est l'examen de base en hématologie. Elle permet d'évaluer les trois principales 
    lignées cellulaires du sang : les globules rouges, les globules blancs et les plaquettes.
    """, body_style))
    
    # Add a table with reference values
    nfs_data = [
        ['Paramètre', 'Valeurs de référence', 'Signification clinique'],
        ['Hémoglobine (Hb)', '13-17 g/dL (H), 12-16 g/dL (F)', 'Anémie si bas, polyglobulie si élevé'],
        ['Hématocrite (Ht)', '40-52% (H), 36-48% (F)', 'Proportion de globules rouges dans le sang'],
        ['VGM', '80-100 fL', 'Taille moyenne des globules rouges'],
        ['CMH', '27-34 pg', 'Quantité moyenne d\'hémoglobine par globule rouge'],
        ['Leucocytes', '4 000 - 10 000/mm³', 'Défense contre les infections'],
        ['Plaquettes', '150 000 - 400 000/mm³', 'Coagulation sanguine']
    ]
    
    t = Table(nfs_data, colWidths=[120, 150, 250])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),  # Light blue header
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),  # Dark blue text
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),  # Very light blue
        ('TEXTCOLOR', (0, 1), (-1, -1), colors.HexColor('#1E293B')),  # Dark gray text
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 8),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),  # Light gray grid
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),  # Border
    ]))
    elements.append(t)
    elements.append(Spacer(1, 20))
    
    print("Début de la génération des guides...\n")
    
    # Create output directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'enhanced_guides')
    os.makedirs(output_dir, exist_ok=True)
    
    # List of all guides to generate
    guides = [
        {
            'function': create_blood_test_guide,
            'filename': 'guide-analyses-sanguines.pdf',
            'title': 'Guide des Analyses Sanguines'
        },
        {
            'function': create_health_check_guide,
            'filename': 'guide-bilan-sante.pdf',
            'title': 'Guide de Préparation aux Bilans de Santé'
        },
        {
            'function': create_biochemistry_guide,
            'filename': 'guide-analyses-biochimiques.pdf',
            'title': 'Guide des Analyses Biochimiques'
        },
        {
            'function': create_diabetes_guide,
            'filename': 'guide-diabete.pdf',
            'title': 'Guide du Dépistage du Diabète'
        },
        {
            'function': create_kidney_guide,  # Fixed function name to match the actual function
            'filename': 'guide-fonction-renale.pdf',
            'title': 'Guide de la Fonction Rénale'
        },
        # Add more guides here as they are created
    ]
    
    # Generate all guides
    success_count = 0
    for guide in guides:
        if generate_guide(guide['function'], guide['filename'], guide['title']):
            success_count += 1
    
    # Print summary
    print(f"\nGénération terminée : {success_count}/{len(guides)} guides générés avec succès.")
    print(f"Les guides sont disponibles dans : {os.path.join(os.path.dirname(__file__), '..', 'public', 'enhanced_guides')}")

def create_health_check_guide():
    """Create a comprehensive health check preparation guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide de Préparation aux Bilans de Santé",
        "Tout savoir pour bien préparer vos examens médicaux",
        "Prévention et Préparation"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Préparation générale", "4"],
        ["3. Examens sanguins", "6"],
        ["  3.1 Prise de sang veineuse", "6"],
        ["  3.2 Bilan lipidique", "7"],
        ["  3.3 Glycémie et diabète", "8"],
        ["4. Examens d'urine", "9"],
        ["5. Examens d'imagerie", "11"],
        ["6. Conseils par type d'examen", "13"],
        ["7. Foire aux questions", "15"],
        ["8. Glossaire", "17"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Une bonne préparation est essentielle pour obtenir des résultats d'analyses fiables. 
    Ce guide vous explique comment vous préparer correctement à différents types d'examens médicaux.
    """, body_style))
    
    # 2. Préparation générale
    add_section(elements, "2. Préparation générale", 1)
    elements.append(Paragraph("""
    Voici les règles générales à suivre avant la plupart des examens médicaux :
    """, body_style))
    
    prep_data = [
        ["Recommandation", "Détails"],
        ["Jeûne", "8-12 heures pour la plupart des bilans sanguins"],
        ["Hydratation", "Boire de l'eau est généralement autorisé"],
        ["Médicaments", "À prendre normalement sauf avis contraire du médecin"],
        ["Activité physique", "Éviter les efforts intenses 24h avant les prises de sang"],
        ["Tabac", "À éviter dans l'heure précédant l'examen"]
    ]
    
    t = Table(prep_data, colWidths=[120, 400])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#EFF6FF')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#1E40AF')),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F8FAFC')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#E2E8F0')),
    ]))
    elements.append(t)
    
    # Add more sections with detailed content...
    elements.append(PageBreak())
    
    # Footer
    elements.append(Paragraph("Laboratoire CBA - Centre de Biologie et d'Analyses", body_style))
    elements.append(Paragraph("Votre partenaire santé pour des résultats fiables", body_style))
    
    return elements

def create_biochemistry_guide():
    """Create a comprehensive biochemistry analysis guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide des Analyses Biochimiques",
        "Comprendre les paramètres biochimiques et leurs interprétations",
        "Biochimie Clinique"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Fonction hépatique", "4"],
        ["3. Fonction rénale", "6"],
        ["4. Électrolytes et équilibre acido-basique", "8"],
        ["5. Marqueurs cardiaques", "10"],
        ["6. Marqueurs inflammatoires", "12"],
        ["7. Interprétation des résultats", "14"],
        ["8. Foire aux questions", "16"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Les analyses biochimiques fournissent des informations essentielles sur le 
    fonctionnement des organes et le métabolisme. Ce guide vous aide à comprendre 
    les principaux paramètres biochimiques et leur signification clinique.
    """, body_style))
    
    # Add more sections with detailed content...
    
    return elements

def create_cardiovascular_guide():
    """Create a comprehensive cardiovascular health guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide de Santé Cardiovasculaire",
        "Comprendre et prévenir les maladies cardiovasculaires",
        "Cardiologie et Prévention"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Facteurs de risque cardiovasculaire", "4"],
        ["3. Bilan lipidique", "6"],
        ["4. Marqueurs d'inflammation", "8"],
        ["5. Prévention et mode de vie", "10"],
        ["6. Suivi et traitements", "12"],
        ["7. Foire aux questions", "14"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Les maladies cardiovasculaires représentent la première cause de mortalité dans le monde.
    Ce guide vous aide à comprendre les facteurs de risque, les examens de dépistage
    et les mesures de prévention pour préserver votre santé cardiovasculaire.
    """, body_style))
    
    # Add more sections with detailed content...
    
    return elements

def create_pregnancy_guide():
    """Create a comprehensive pregnancy testing guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide des Examens de Grossesse",
        "Suivi biologique et dépistages pendant la grossesse",
        "Gynécologie-Obstétrique"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Examens du 1er trimestre", "4"],
        ["3. Examens du 2ème trimestre", "6"],
        ["4. Examens du 3ème trimestre", "8"],
        ["5. Dépistages prénataux", "10"],
        ["6. Suivi post-partum", "12"],
        ["7. Foire aux questions", "14"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Le suivi biologique pendant la grossesse est essentiel pour la santé de la mère et de l'enfant.
    Ce guide détaille les différents examens recommandés à chaque étape de la grossesse.
    """, body_style))
    
    # Add more sections with detailed content...
    
    return elements

def create_thyroid_guide():
    """Create a comprehensive thyroid function guide."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide du Bilan Thyroïdien",
        "Comprendre et interpréter les analyses de la fonction thyroïdienne",
        "Endocrinologie"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Anatomie et physiologie de la thyroïde", "4"],
        ["3. Examens biologiques", "6"],
        ["4. Hypothyroïdie", "8"],
        ["5. Hyperthyroïdie", "10"],
        ["6. Nodules et cancers thyroïdiens", "12"],
        ["7. Suivi et traitements", "14"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    La thyroïde est une glande essentielle au métabolisme. Ce guide vous aide à comprendre
    les différents tests thyroïdiens et leur interprétation dans le diagnostic et le suivi
    des pathologies thyroïdiennes.
    """, body_style))
    
    # Add more sections with detailed content...
    
    return elements

def create_vitamins_guide():
    """Create a comprehensive guide on vitamins and minerals."""
    elements = []
    
    # Cover Page
    add_cover_page(
        elements,
        "Guide des Vitamines et Minéraux",
        "Comprendre les carences et les besoins nutritionnels",
        "Nutrition et Micronutrition"
    )
    
    # Table of Contents
    toc_data = [
        ["1. Introduction", "3"],
        ["2. Vitamines hydrosolubles", "4"],
        ["3. Vitamines liposolubles", "6"],
        ["4. Minéraux majeurs", "8"],
        ["5. Oligo-éléments", "10"],
        ["6. Dépistage des carences", "12"],
        ["7. Aliments riches en nutriments", "14"]
    ]
    add_table_of_contents(elements, toc_data)
    
    # 1. Introduction
    add_section(elements, "1. Introduction", 1)
    elements.append(Paragraph("""
    Les vitamines et minéraux sont essentiels au bon fonctionnement de l'organisme.
    Ce guide détaille leurs rôles, les apports recommandés, les signes de carence
    et les sources alimentaires pour une nutrition optimale.
    """, body_style))
    
    # Add more sections with detailed content...
    
    return elements

if __name__ == "__main__":
    main()
