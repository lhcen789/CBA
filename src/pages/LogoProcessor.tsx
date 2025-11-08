import { useState } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.jpg";

export default function LogoProcessor() {
  const [processing, setProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleProcessLogo = async () => {
    setProcessing(true);
    try {
      // Load the logo
      const response = await fetch(logo);
      const blob = await response.blob();
      const img = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(img);
      
      // Create URL for the processed image
      const url = URL.createObjectURL(resultBlob);
      setProcessedImage(url);
    } catch (error) {
      console.error('Error processing logo:', error);
      alert('Failed to process logo. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'logo-no-bg.png';
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Logo Background Remover</h1>
              <p className="text-muted-foreground">
                Process the logo to remove its background
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border space-y-4">
                <h2 className="text-xl font-semibold">Original Logo</h2>
                <div className="bg-muted/30 p-8 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="Original Logo" className="max-h-40" />
                </div>
              </div>

              <Button 
                onClick={handleProcessLogo} 
                disabled={processing}
                className="w-full"
                size="lg"
              >
                {processing ? 'Processing...' : 'Remove Background'}
              </Button>

              {processedImage && (
                <div className="bg-card p-8 rounded-lg border space-y-4">
                  <h2 className="text-xl font-semibold">Processed Logo</h2>
                  <div className="bg-muted/30 p-8 rounded-lg flex items-center justify-center">
                    <img src={processedImage} alt="Processed Logo" className="max-h-40" />
                  </div>
                  <Button onClick={handleDownload} className="w-full">
                    Download Logo
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
