- Leer apuntes del curso de Nest, 04.MongoDB.Pokedex para crear un proyecto desde 0.
# Servidor Nest
## Creacion
Los apuntes completos se pueden revisar en el repositorio de Nest. https://github.com/House197/Nest

1. Instalar Nest de formal global. En Windows se debe hacer desde una terminal como adiminstrador.
    - Se tienen notas sobres errores encontrados en: https://github.com/House197/Nest/blob/main/00.Notas.md

```bash
npm i -g @nestjs/cli
```

2. Creacion de servidor.

```bash
nest new project-name
```

3. Correr servidor.

```bash
npm run start
```

## Servir contenido estatico 
- Esto va a permitir poder mostrar una aplicacion Web ya sea hecha en React, Angular, etc.
- Por defecto, al iniciar un proyecto en Nest y visitar el puerto que se especifica se obtiene un status 404.

1. En el root del proyecto se crea la carpeta de public, lo cual es un nombre comun para esta carpeta.
    - En esta carpeta se colocara el build de la aplicacion del cliente, tal como la de React.
2. Instalar server-static
```bash
npm i @nestjs/serve-static
```

3. Configurar @Module de app.module.ts para usar este paquete.
- Ejemplo:

```js
@Module({
    imports: [
        ServerStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        })
    ],
})

export claDD 
```

## Controladores
https://github.com/House197/Nest/blob/main/03.PrimerosPasos.md

- Los comando se pueden ejecutar directamente en el root del proyecto, no necesariamente en el src del proyecto.

1. Crear modulo de coordenadas para los personajes.

```bash
nest g mo coordinates
```

2. Crear controlador de coordenadas.

```bash
nest g co coordinates
```

## Servicios
1. Crear servicio para interactuar con la coleccion de coordenadas en la base de datos.

```bash
npm g s coordinates
```

2. Inyectar servicio en controlador.

## Variables de entorno
### Configuration Loader
1. Instalar paquete de config

```bash
npm i @nestjs/config
```

2. Configuracion Loader para inyectar variables de entorno, lo cual permite procesar y validar las variables de entorno.
    1. Crear funcion que mapea las variables de entorno. src/config/app.config.ts
    2. Se usa el simbolo de mas para hacer un parse a las variables que deben ser numericas, ya que todas se interpretan como string.


2. Configurar modulo en app.module.ts
    - Debe colocarse en la primera posicion del arreglo.
    
3. Usar variables de entorno con process.env


```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'nombre de db aca'
    }),
    CoordinatesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

```

### ConfigurationService
- Permite poder usar la configuracion EnvConfiguration creada.

## Base de datos
https://github.com/House197/Nest/blob/main/04.MongoDB.Pokedex.md
1. Instalar mongoose para nest.

```bash
npm i @nestjs/mongoose mongoose
```

2. Usar modulo de Mongo en imports de app.module.ts

```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CoordinatesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

```