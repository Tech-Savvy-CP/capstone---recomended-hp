export function generatePhoneTemplate({id, image, name, price, ram, storage, kamera, baterai}){
    return`
        <div class="col-lg-3 mt-3">
            <div class="card text-center border-5 shadow-lg" style="border-color: #F6EBDA;">
                <div class="card-body">
                    <img src="${image}" class="rounded-3 img-fluid" alt="">
                    <div class="mt-3">
                        <h5><b>${name}</b></h5>
                    </div>
                    <div class="mt-2 text-danger">
                        <h5><b>${price}</b></h5>
                    </div>
                    <div class="mt-2 row justify-content-between">
                        <div class="col-6">
                            <i class="fa fa-microchip" style="font-size: 20px; color: #FF902A;"></i> ${ram}
                        </div>
                        <div class="col-6">
                            <i class="fa fa-hdd" style="font-size: 20px; color: #FFD28F;"></i> ${storage}
                        </div>
                    </div>
                    <div class="mt-2 row justify-content-between">
                        <div class="col-6">
                            <i class="fa fa-camera" style="font-size: 20px;"></i> ${kamera}
                        </div>
                        <div class="col-6">
                            <i class="fa fa-battery-full" style="font-size: 20px;"></i> ${baterai}
                        </div>
                    </div>
                </div>
            </div>
    </div>
    `
};

export function generateCommentTemplate({coment, nama}){
    return `
         <div id="reviewSection" class="review-section">
            <p>${coment}</p>
            <p>${nama}</p>
        </div>
    `;
}