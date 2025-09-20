import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-steel via-corporate-darkSteel to-black relative overflow-hidden print-background">
      {/* Print button */}
      <div className="fixed top-4 right-4 z-50 no-print">
        <Button 
          onClick={handlePrint}
          className="bg-corporate-red hover:bg-corporate-red/80 text-white shadow-lg"
        >
          <Icon name="Printer" size={20} className="mr-2" />
          Печать
        </Button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 no-print">
        <div className="absolute top-10 left-10 w-32 h-32 bg-corporate-gold rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-corporate-red rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-corporate-gold rounded-full blur-lg"></div>
      </div>

      {/* Industrial pattern overlay */}
      <div className="absolute inset-0 opacity-5 no-print">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="bg-white/10 border border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with company logo area */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Icon name="Building2" size={48} className="text-corporate-gold mr-4" />
            <div>
              <h1 className="text-5xl font-bold text-white print-header mb-2">ЕВРАЗ КГОК</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-corporate-red to-corporate-gold mx-auto"></div>
            </div>
          </div>
          
          <Badge variant="outline" className="bg-corporate-gold/20 text-corporate-gold print-gold border-corporate-gold/50 text-lg px-6 py-2">
            Корпоративное поздравление
          </Badge>
        </div>

        {/* Main greeting card */}
        <Card 
          className={`max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-2 border-corporate-gold/30 shadow-2xl transition-all duration-1000 delay-500 print-card ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="p-12">
            {/* Greeting section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Icon name="Sparkles" size={32} className="text-corporate-gold print-gold mr-3" />
                <h2 className="text-4xl font-bold text-corporate-steel print-header">
                  ПОЗДРАВЛЕНИЕ
                </h2>
                <Icon name="Sparkles" size={32} className="text-corporate-gold print-gold ml-3" />
              </div>
              
              <div className="bg-gradient-to-r from-corporate-red to-corporate-gold h-0.5 w-48 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-700 print-text leading-relaxed max-w-3xl mx-auto">
                От всей души поздравляем коллектив <span className="font-bold text-corporate-red print-header">ЕВРАЗ КГОК</span> 
                с днём рождения предприятия! Ваш труд и преданность делу являются основой 
                успеха и процветания компании.
              </p>
            </div>

            {/* Industrial icons section */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-steel/10 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Factory" size={32} className="text-corporate-steel" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Производство</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-red/10 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Zap" size={32} className="text-corporate-red" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Энергия</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-gold/20 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Award" size={32} className="text-yellow-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Качество</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-steel/10 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Users" size={32} className="text-corporate-steel" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Команда</p>
              </div>
            </div>

            {/* Wishes section */}
            <div className="bg-gradient-to-r from-corporate-steel/5 to-corporate-red/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-corporate-steel print-header mb-4 flex items-center justify-center">
                  <Icon name="Heart" size={28} className="text-corporate-red print-header mr-3" />
                  ПОЖЕЛАНИЯ
                  <Icon name="Heart" size={28} className="text-corporate-red print-header ml-3" />
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-corporate-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="TrendingUp" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-steel print-header mb-2">Развития и роста</h4>
                      <p className="text-gray-700 print-text">Пусть каждый новый год приносит новые достижения и покорение производственных высот</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Shield" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-steel print-header mb-2">Безопасности</h4>
                      <p className="text-gray-700 print-text">Пусть безопасность труда остается приоритетом, а каждый рабочий день заканчивается благополучно</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-corporate-steel rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Target" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-steel print-header mb-2">Достижения целей</h4>
                      <p className="text-gray-700 print-text">Пусть все поставленные задачи решаются успешно, а планы реализуются с превышением показателей</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-corporate-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Handshake" size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-steel print-header mb-2">Единства коллектива</h4>
                      <p className="text-gray-700 print-text">Пусть крепнет сплоченность команды, а корпоративный дух вдохновляет на новые свершения</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing message */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-corporate-red to-corporate-gold h-0.5 w-32 mx-auto mb-6"></div>
              <p className="text-lg text-corporate-steel print-header font-medium">
                С праздником, ЕВРАЗ КГОК! 🎉
              </p>
              <p className="text-base text-gray-600 print-text mt-2">
                Пусть металлургическая мощь предприятия крепнет с каждым годом!
              </p>
            </div>
          </div>
        </Card>

        {/* Footer with industrial elements */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-1000 no-print ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-6 text-corporate-gold/70">
            <Icon name="Hammer" size={24} />
            <Icon name="Cog" size={24} />
            <Icon name="Cpu" size={24} />
            <Icon name="Wrench" size={24} />
            <Icon name="Settings" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}