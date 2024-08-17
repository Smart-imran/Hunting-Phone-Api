const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();

    const phones = data.data;
    //console.log(phones);

    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    //console.log(phones);

    //step-1

    const phoneContainer = document.getElementById("phone-container");

    // clear phone container 
    phoneContainer.textContent = "";

    const showAllContainer = document.getElementById("show-all-container");
    //display 12 phones, if not show all
    if (phones.length > 12 && !isShowAll) {

        showAllContainer.classList.remove('hidden');
    }

    else {
        showAllContainer.classList.add('hidden');
    }

    // display only 12 phone 1st time if not show all

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    console.log("Is show all", isShowAll);

    //display only 12 phone 1st time
    console.log(phones.length);


    phones.forEach(phone => {
         console.log(phone);

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
        <div class="card-actions justify-center">
          <button onclick="handleSearchDetails('${phone.slug}')"  class="btn btn-primary">Show Details</button>
        </div>
        </div>
        </div>
        
        `;

        // step-4 append child

        phoneContainer.appendChild(phoneCard);

    });

    //hiden loading spiner

    toggleLoadingSpiner(false);
}


//Handle Search button

const searchHandle = (isShowAll) => {
    toggleLoadingSpiner(true);

    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}

/* const searchHandle2 = () => {
    toggleLoadingSpiner();
    
    const searchField2 = document.getElementById("search-field2");
    const searchText2 = searchField2.value;
    loadPhone(searchText2);
} */




    /* Handle search Details */

    const handleSearchDetails = (detailId) =>{
        console.log("heloo world",detailId);
    }

const toggleLoadingSpiner = (isLoading) => {
    const loaddingspiner = document.getElementById("loading-spiner");

    if (isLoading) {
        loaddingspiner.classList.remove("hidden");
    }
    else {
        loaddingspiner.classList.add("hidden");
    }
}


const handleShowAll = () => {

    searchHandle(true);

}
loadPhone();