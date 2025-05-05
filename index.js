import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Laptop, Cpu, Monitor } from "lucide-react";

export default function Zer0BitHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Zer0Bit Informática</h1>
        <p className="text-lg text-gray-600">Peças usadas | Manutenção | Programação | Sites</p>
        <a
          href="https://wa.me/5554999400722"
          target="_blank"
          className="inline-block mt-4"
        >
          <Button className="text-white bg-green-600 hover:bg-green-700">
            Fale conosco no WhatsApp
          </Button>
        </a>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Wrench className="text-blue-500" />
              <h3 className="font-semibold">Manutenção de PCs</h3>
              <p className="text-sm text-gray-600">Formatação, limpeza, upgrades e diagnóstico.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Laptop className="text-blue-500" />
              <h3 className="font-semibold">Criação de Sites</h3>
              <p className="text-sm text-gray-600">Sites profissionais, responsivos e rápidos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Cpu className="text-blue-500" />
              <h3 className="font-semibold">Instalação de Drivers</h3>
              <p className="text-sm text-gray-600">Instalação e atualização de drivers para Windows.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Peças em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <Monitor className="text-blue-500" />
              <h3 className="font-semibold">HD Seagate 500GB</h3>
              <p className="text-sm text-gray-600">R$ 80 - Usado, testado e com garantia de 3 dias.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Cpu className="text-blue-500" />
              <h3 className="font-semibold">Processador Intel Core i5-2400</h3>
              <p className="text-sm text-gray-600">R$ 120 - Ideal para upgrades de baixo custo.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <Monitor className="text-blue-500" />
              <h3 className="font-semibold">Memória RAM DDR3 4GB</h3>
              <p className="text-sm text-gray-600">R$ 60 - Testada e com garantia.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
