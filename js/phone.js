const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();

    const phones = data.data;
    //console.log(phones);

    displayPhones(phones)
}

const displayPhones = (phones) => {
    //console.log(phones);

    //step-1

    const phoneContainer = document.getElementById("phone-container");

    // clear phone container 
    phoneContainer.textContent = "";

    phones.forEach(phone => {
        //console.log(phone);

        //step-2. create a div

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;

        // set-3 inner html

        phoneCard.innerHTML = `        
        <figure>
        <img src="${phone.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        
        `;

        // step-4 append child

        phoneContainer.appendChild(phoneCard);

    });
}


//Handle Search button

const searchHandle = () => {

    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


loadPhone();