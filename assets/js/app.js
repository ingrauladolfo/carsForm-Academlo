'use strict';

const cars = [
    {
        brand: 'Aston Martin',
        alt: 'Aston Martin Vantage F1 Edition',
        model: 'Vantage F1 Edition',
        color: 'Ocellus Teal',
        year: 2021,
        price: 198505.49,
        photo: 'https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/navigation/vantage-sterling/amf1-performance2.jpg?mw=1980&rev=-1&format=webp&hash=D95E3AD55D973B68EE5325DB95D13047'
    },
    {
        brand: 'Audi',
        alt: 'Aston Martin Vantage F1 Edition',
        model: 'Q2',
        color: 'Turbo blue',
        year: 2021,
        price: 27744.97,
        photo: 'https://www.audi.com.mx/content/dam/nemo/mx/models/Q2/q2_sinquattro/1920x1080_q2_galery1.jpg?output-format=webp&downsize=1459px:*'
    },
];

/*
    Show Cars
*/
const cars_container = document.getElementById('cars-container');
ShowCars();

/*
    Inputs
*/
const brand_input = document.getElementById('brand');
const model_input = document.getElementById('model');
const color_input = document.getElementById('color');
const year_input = document.getElementById('year');
const price_input = document.getElementById('price');
const photo_input = document.getElementById('photo');
const create_btn = document.getElementById('create');
const update_btn = document.getElementById('update');
const cancel_btn = document.getElementById('cancel');
let updateIndex;

/*
    Exceptions
*/
create_btn.addEventListener("click", function (event) {
    event.preventDefault();
})

/*functions*/

function ShowCars() {
    cars_container.innerHTML = '';
    for (let i = 0; i < cars.length; i++) {
        cars_container.innerHTML += `
        <div class="card mb-3 d-flex justify-content-center" style="width: calc(100% - 10%);max-width:calc(100%-10%); height:auto;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${cars[i].photo}" class="card-img-top" style="width: calc(100% - 10%);height: calc(100%-10%)" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <table>
      <tr>
        <td>Marca:</td>
        <td>${cars[i].brand}</td>
      </tr>
      <tr>
        <td>Modelo:</td>
        <td>${cars[i].model}</td>
      </tr>
      <tr>
        <td>Color:</td>
        <td>${cars[i].color}</td>
      </tr>
      <tr>
        <td>Año:</td>
        <td>${cars[i].year}</td>
      </tr>
    </table>
    <div class="price">
      <h5>${cars[i].price} USD</h5>
    </div>
    <div class="actions">
      <button type="button" class="btn btn-primary" name="${i}" onclick="UpdateCatch(${i});"><i class="far fa-edit"></i></button>
      <button type="button" class="btn btn-danger" name="${i}" id="delete-btn" onclick="DeleteCar(${i});"><i class="fas fa-trash-alt"></i></button>
    </div>
      </div>
    </div>
  </div>
</div>
        
      
      `;
    }
}

function ShowUpdatesBtn() {
    create_btn.classList.toggle('d-none');
    update_btn.classList.remove('d-none');
    cancel_btn.classList.remove('d-none');
}

function ShowCreateBtn() {
    create_btn.classList.remove('d-none');
    update_btn.classList.toggle('d-none');
    cancel_btn.classList.toggle('d-none');
}

function CleanInputs() {
    brand_input.value = '';
    model_input.value = '';
    color_input.value = '';
    year_input.value = '';
    price_input.value = '';
    photo_input.value = '';
}

function CreateCar() {
    if (brand_input.value != '' && model_input.value != '' && color_input.value != '' && year_input.value != '' && price_input.value != '' && photo_input.value != '') {
        cars.push(
            {
                brand: brand_input.value,
                model: model_input.value,
                color: color_input.value,
                year: parseInt(year_input.value),
                price: parseInt(price_input.value),
                photo: photo_input.value
            }
        );
        Swal.fire(
          {
            position: 'bottom-end',
            imageUrl: 'https://media.tenor.com/images/d34e305b2ebcb10df7cb5ae81aa983ec/tenor.gif',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Success Trump',
            title: 'You have successfully added a vehicle',
            showConfirmButton: true,
          
          }
        )
        CleanInputs();
        ShowCars();
    }else{
      Swal.fire({
        position: 'bottom-end',
        imageUrl: 'http://31.media.tumblr.com/2e8986a1b1c062623cea1b9edaddcc52/tumblr_mup3qzOPsX1rk0k2jo1_500.gif',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Error google',
        showConfirmButton: true,
        text: 'It is necessary to fill all the fields',
      });
    }
}

function UpdateCatch(index) {
    updateIndex = index;
    ShowUpdatesBtn();
    brand_input.value = cars[index].brand;
    model_input.value = cars[index].model;
    color_input.value = cars[index].color;
    year_input.value = cars[index].year;
    price_input.value = cars[index].price;
    photo_input.value = cars[index].photo;
}

function UpdateCar() {
    cars[updateIndex].brand = brand_input.value;
    cars[updateIndex].model = model_input.value;
    cars[updateIndex].color = color_input.value;
    cars[updateIndex].year = year_input.value;
    cars[updateIndex].price = price_input.value;
    cars[updateIndex].photo = photo_input.value;
    CleanInputs();
    ShowCars();
    ShowCreateBtn();
    Swal.fire(
      {
        position: 'bottom-end',
        imageUrl: 'https://media4.giphy.com/media/J5kPezDu0k77k2E1Jz/source.gif',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Update',
        title: 'You have successfully update a vehicle',
        showConfirmButton: true,
      
      }
    )
}

function DeleteCar(index) {
    cars.splice(index, 1);
    CleanInputs();
    ShowCars();
    Swal.fire({
      position: 'bottom-end',
      title: 'You have successfully removed a vehicle',
      showConfirmButton: true,
      imageUrl: 'https://cdn.dribbble.com/users/1581195/screenshots/3695151/delete.gif',
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Delete',
      
    });
}