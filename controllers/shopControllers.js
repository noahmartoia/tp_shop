import connections from "../database.js";



export const getProducts = (req, res)=>{
    const shop = connections.query(
        'SELECT * FROM produit',
        function (err, results, fields) {
            console.log(results)
            return results;
        }
    );
    res.render("shop", {title:'shop', js:'<script src="js/shop.js"></script>', shop});
}

const shopController = {
    getProducts,
}
export default shopController