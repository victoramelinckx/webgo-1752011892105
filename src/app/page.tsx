
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Digitaliza tus ventas rápidamente sin complicaciones. Te entregamos un sitio web listo y soporte 24/7 para que no te preocupes." cta1="Digitaliza Ahora" />
<How step1Title="Solicita tu web" step1Desc="Completa un breve formulario sobre tu negocio." step2Title="Diseño Express" step2Desc="Creamos tu sitio de ventas en 24 horas." step3Title="Soporte 24/7" step3Desc="Te asistimos para maximizar tus ventas online." />
<Aboutus headline="WebGo: Vende Online Sin Esfuerzo" subheadline="Digitalizamos tus ventas para que tú te concentres en crecer." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo por ti." beneficiotitulo2="Ventas Rápidas" beneficio2="Genera ingresos desde el primer día." />
<Services heading="Conquista el Mercado Digital" description="Transformamos tu presencia online rápida y eficazmente." services={[{"name":"Diseño Express","icon":"bolt","description":"Obtén tu web lista en 24 horas."},{"name":"SEO Local","icon":"map-pin","description":"Atrae clientes cercanos con SEO efectivo."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido optimizado para atraer clientes."},{"name":"Soporte 24/7","icon":"headphones","description":"Asistencia constante para tu sitio web."},{"name":"Automatización de Ventas","icon":"robot","description":"Optimiza el proceso de venta online."},{"name":"Análisis de Datos","icon":"chart-line","description":"Mejora decisiones con datos claros."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web excepcionales y memorables." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender mis productos en línea?","respuesta":"WebGo te facilita la venta en línea al crear un sitio web atractivo y fácil de usar. Nos encargamos de todo para que puedas enfocarte en lo que haces mejor: tu negocio. Así, no solo dependerás de las recomendaciones, sino que también llegarás a más clientes en todo USA."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo maneja esto WebGo?","respuesta":"Con WebGo, no necesitas preocuparte por el tiempo. Nosotros gestionamos tu sitio web completamente, desde el diseño hasta el mantenimiento, asegurándonos de que siempre esté optimizado y funcionando correctamente. Te damos más tiempo para enfocarte en crecer tu negocio."},{"pregunta":"¿Qué beneficios obtendré al digitalizar mis ventas con WebGo?","respuesta":"Digitalizar tus ventas con WebGo te permite llegar a un público más amplio, aumentar tus ingresos y mejorar tu presencia en línea. Nuestro servicio te ayuda a establecer una base sólida para el crecimiento continuo de tu negocio, optimizando tus oportunidades de venta."},{"pregunta":"¿Qué pasa si no sé nada sobre ventas en línea?","respuesta":"No te preocupes. WebGo está aquí para guiarte en cada paso. No necesitas ser un experto; nosotros te ayudamos a comprender el proceso y nos encargamos de los detalles técnicos para que puedas vender con confianza en línea."},{"pregunta":"¿Es caro digitalizar mi negocio con WebGo?","respuesta":"WebGo ofrece soluciones accesibles para digitalizar tu negocio. Nuestro objetivo es proporcionar un servicio valioso que te ayude a crecer con una inversión razonable. Contacta con nosotros para conocer nuestros precios y cómo podemos ajustarnos a tu presupuesto."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio y aumentar tus ventas sin que tengas que manejar un sitio web. Únete a cientos de emprendedores que ya están generando ingresos online."
                      formPostUrl="api/contact-us"
                      projectId="TVwDlToOvHSGF7He9Ixe9bqdkhd2"
                    />
<Footer />
    </main>
  );
}
