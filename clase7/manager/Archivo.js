import fs from 'file-system';

const file = './../files/Products.txt';

async function bringProducts() {
    try {
        let products = await fs.promises.readFile(file, 'utf-8');
        //console.log(JSON.parse(products));
        return JSON.parse(products);
    } catch (error) {
        console.log("Cannot read products "+error)
    }
}

export {bringProducts};

//export class Archivo {
    //constructor(){
    //}
    /*async readProducts() {
        try{
            let content = await fs.promises.readFile(this.file,'utf-8')
            console.log(content);
        }catch(error){
            console.log("File does not exist "+error)
        }
    }*/
    /*async bringProducts() {
        try {
            let products = await fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        } catch (error) {
            console.log("Cannot read products "+error)
        }
    }*/
    /*async addProduct(name, price, img) {
        try{
            let content = await this.bringProducts();
            const prod = {
                id: content.length,
                name: name,
                price: price,
                thumbnail: img
            };
            content.push(prod);
            
            await fs.promises.writeFile(this.file, JSON.stringify(content));
            console.log("Product added");
        }catch(error){
            console.log("Cannot add product "+error)
        }
    }*/
    /*async deleteFile() {
        try{
            await fs.promises.unlink(this.file);
            console.log("Deleting file...")
        } catch(error){
            console.error("File deleted")
        }
    }*/
//}
/*
let productList = new Archivo();

await productList.addProduct('Cosa1','10.00','qweqwe');
await productList.addProduct('Cosa2','8.00','qweqweasd');
await productList.addProduct('Cosa3','109.00','imangen3');

productList.readProducts();
*/
//productList.deleteFile();