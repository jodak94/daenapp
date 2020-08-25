import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-cargar-fotos',
  templateUrl: './cargar-fotos.page.html',
  styleUrls: ['./cargar-fotos.page.scss'],
})
export class CargarFotosPage implements OnInit {

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  fotos = [
    'assets/img/1.jpeg',
    'assets/img/2.jpeg',
    'assets/img/3.jpg',
  ];
  prevs = [
    'assets/img/1.jpeg',
    'assets/img/2.jpeaag',
    'assets/img/3.jpg',
  ];
  resId;

  options: CameraOptions = {
    quality: 100,
    destinationType : this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  openCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.fotos.push(base64Image);
    this.createThumbnail(base64Image);

    }, (err) => {
      console.log(err)
    });
  }

  createThumbnail(img) {
    this.generateFromImage(img, 200, 200, 0.8, data => {
      this.prevs.push(data);
    });
  }

  generateFromImage(img, MAX_WIDTH: number = 700, MAX_HEIGHT: number = 700, quality: number = 1, callback) {
    var canvas: any = document.createElement("canvas");
    var image = new Image();

    image.onload = () => {
      var width = image.width;
      var height = image.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(image, 0, 0, width, height);

      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg', quality);

      callback(dataUrl)
    }
    image.src = img;
  }

  getImageSize(data_url) {
    var head = 'data:image/jpeg;base64,';
    return ((data_url.length - head.length) * 3 / 4 / (1024*1024)).toFixed(4);
  }

  submit(){
    console.log(this.fotos);
  }
}
