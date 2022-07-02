var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, imgPath) {
        this.name = name;
        this.quantity = quantity;
        this.imgPath = imgPath;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("lettuce", 1, "https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_3ea38082-38f8-41f8-a6fc-0c4ed481c040.jpg"),
    new Grocery("milk", 2, "https://i5.walmartimages.com/asr/35704388-8fb2-4bfd-a65b-4a6427ca8388_1.8085c624bc19353dfaa06227f3d396fc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"),
    new Grocery("lemon", 2, "https://images.albertsons-media.com/is/image/ABS/184080250?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available"),
    new Grocery("potato chips", 1, "https://target.scene7.com/is/image/Target/GUEST_dd894bfa-cafc-445e-9f8b-f5aa44b9a32d?wid=800&hei=800&qlt=80&fmt=pjpeg")
];
