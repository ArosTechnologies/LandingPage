# Planes y Precios — AROS PACS

Bienvenido a la plataforma PACS más abierta, transparente y segura del mercado. Rompemos con el modelo tradicional de "secuestro de datos": con nosotros, tu información médica te pertenece al 100%.

## Nuestro Modelo: BYOS (Bring Your Own Storage)

A diferencia de otros sistemas que te revenden el almacenamiento con sobreprecio, nuestro PACS utiliza el modelo **BYOS (Trae Tu Propio Almacenamiento)**. 

1. **Tu Cuenta de AWS:** Configuramos una cuenta de AWS independiente y dedicada exclusivamente para tu clínica u hospital.
2. **Costo Real:** Tú le pagas directamente a Amazon Web Services (AWS) el costo neto de tus Gigabytes alojados (aproximadamente **$0.023 USD por GB** en S3). Si tus estudios crecen, tu factura solo aumenta unos centavos.
3. **Sin Ataduras (No Vendor Lock-in):** Si el día de mañana decides dejar de usar nuestra plataforma, simplemente revocamos nuestro software. **Te quedas con las llaves de tu cuenta de AWS, todo tu histórico intacto y cero tarifas de rescate o migración.**

---

## Planes Mensuales (Tarifa Plana)

Elige el plan ideal según el volumen de estudios que procesa tu institución al mes. **Todos los planes incluyen usuarios, médicos referentes y estaciones de visualización ILIMITADAS.**

### 🛑 Plan Emprendedor / Gabinetes Pequeños
*Ideal para consultorios de ultrasonido independientes, clínicas dentales o gabinetes de Rayos X de baja demanda.*
* **Precio:** **$59 USD / mes**
* **Volumen:** Hasta 300 estudios procesados al mes.
* **Incluye:** * Conexión de hasta 2 modalidades (máquinas).
  * Acceso al Portal de Pacientes General.
  * Visor Web de Diagnóstico de alta velocidad.

### ⚡ Plan Clínico / Centros de Diagnóstico
*El preferido del mercado. Diseñado para clínicas medianas con múltiples modalidades operando simultáneamente.*
* **Precio:** **$169 USD / mes**
* **Volumen:** Hasta 1,500 estudios procesados al mes.
* **Incluye:**
  * Conexión de hasta 5 modalidades (Rayos X, Tomografía, Ultrasonido, etc.).
  * Acceso al Portal de Pacientes General.
  * Soporte técnico prioritario.

### 🏢 Plan Hospitalario / Alta Demanda
*Para hospitales medianos, grandes o laboratorios con múltiples sucursales que realizan Tomografías (CT) y Resonancias (MRI) de forma masiva.*
* **Precio:** **$399 USD / mes**
* **Volumen:** Estudios ilimitados.
* **Incluye:**
  * Conexión de modalidades ilimitadas.
  * Sincronización avanzada con sistemas locales.
  * Soporte 24/7 y monitoreo de infraestructura.

---

## 🎁 Beneficios Exclusivos (Cero Fricción)

* **Instalación y Configuración Inicial: $0 USD** Nos encargamos de estructurar tus buckets de AWS, configurar las políticas de retención, conectar tu nodo DICOM router local y dejar el sistema operando a la perfección sin cobrarte un solo centavo de *setup*.
* **Capacitación Completa: $0 USD** Entrenamos a tus técnicos radiólogos, médicos y administradores para que dominen la plataforma desde el primer día.
* **Sin Contratos Forzosos:** Paga mes a mes. Estamos tan seguros de la calidad de nuestro software que no te obligamos a firmar permanencias de largo plazo.

---

## 🌐 Portal de Pacientes Abierto

Creemos que los pacientes merecen acceso fácil a su salud. Nuestra plataforma incluye un **Portal de Pacientes** centralizado desde donde ellos pueden:
* **Visualización Web Ligera:** Ver sus imágenes en cualquier smartphone o computadora de forma instantánea sin necesidad de instalar software especializado, consumiendo el mínimo de datos.
* **Descarga Libre de DICOM:** Descargar el archivo `.dcm` original y completo totalmente gratis para llevarlo a otros médicos. Gracias a nuestra arquitectura, la descarga se realiza mediante URLs firmadas seguras directamente desde tu AWS, garantizando velocidad y seguridad.

---

## Preguntas Frecuentes (FAQ)

### ¿Por qué cobran tan barato en comparación con otros PACS?
Porque no lucramos con tu almacenamiento. Los PACS tradicionales te cobran una tarifa inflada por cada Gigabyte que guardas con ellos. Nosotros separamos el software de la infraestructura: tú pagas a AWS el costo de almacenamiento más barato del mundo, y a nosotros una tarifa fija por mantener el software actualizado, rápido y seguro.

### ¿Qué pasa si decido cancelar el servicio?
Te entregamos las credenciales raíz de tu cuenta de AWS. Cortamos el acceso de nuestro software y tú sigues siendo el dueño absoluto de tu infraestructura y tus imágenes DICOM. No te cobramos nada por salir.

### ¿Quién paga los costos de descarga (Egress) de AWS?
Al estar la infraestructura en tu propia cuenta de AWS, las descargas se facturan directamente a tu cuenta bajo las tarifas estándar de AWS (los primeros 100 GB mensuales de salida hacia internet son gratis en Amazon).