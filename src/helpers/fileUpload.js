export const fileUpload = async (file) => {

    if (!file) throw new Error('No se ha seleccionado ningun archivo');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dxxrxtnrb/image/upload';
    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(!resp) throw new Error('No se ha podido subir el archivo');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

} 