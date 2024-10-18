1. Paquetes
``` bash
npm install cloudinary
```

2. src/config/cloudinary.config.ts

```typescript
// src/config/cloudinary.config.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;


```

3. Crear servicio, controlador y modulo Upload
```bash
nest g mo upload
nest g co upload --no-spec
nest g s upload --no-spec
```




- De la doc de cloudinary se tiene:

```js
import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dluwqcce9', 
        api_key: '331594537324926', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();
```



4. Se crea config/cloudinary.config.ts
    - Se hace asi para llamar la funcion en el servicio y asi ya tener las variables de entorno disponibles.

```javascript
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

export const configureCloudinary = (configService: ConfigService) => {
    cloudinary.config({
        cloud_name: configService.get<string>('CLOUDINARY_CLOUD_NAME'),
        api_key: configService.get<string>('CLOUDINARY_API_KEY'),
        api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
    });
};

export default cloudinary;
```

5. Se inyecta ConfigModule en module de upload.
    - No haria falta si en app module a ConfigModule se le coloca isGlobal en true.
6. En el constructor del servicio se manda a llamar la funcion para configurar cloudinary.









# Stash en Git con untracked files
- If you want to include untracked files in your stash, you can use the --include-untracked or -u option:

```bash
git stash push -u -m "WIP: my changes with untracked files"
```

## Stashing only untracked files
- The -k (or --keep-index) option stashes untracked files while leaving tracked changes in place.

```bash
git stash push -k -m "WIP: stash only untracked files"
```

## Checking stash contents
- You can check what’s in your stash by running:

```bash
git stash list
```

- To see the details of what’s stashed, use:

```bash
git stash show -p stash@{0}
```

## Traer de vuelta cambios en el stashed

```bash
git stash pop
```


Important Note
If you have untracked files that you don’t want to stash (and you don’t want them in your new branch), you can simply leave them as is. They’ll remain in your working directory when you switch branches, but make sure you don't accidentally commit them in the new branch.