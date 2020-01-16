import React, { Fragment } from "react";

export class UserWishlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: null,
            wishlist: this.mockWishlist
        }
    }

    mockWishlist = [{
    "productName": "BIOSOURCE Women's Mega Multivitamin",
    "link": "https://www.priceline.com.au/weight-and-vitamins/vitamins/multivitamins-and-minerals/biosource-women-s-mega-multivitamin-120-capsules",
    "vitaminInformation": [
        {
            "name": "Thiamine hydrochloride",
            "amount": "75mg"
        },
        {
            "name": "Riboflavin",
            "amount": "75mg"
        },
        {
            "name": "Nicotinamide",
            "amount": "75mg"
        },
        {
            "name": "Calcium pantothenate",
            "amount": "69mg"
                    },
        {
            "name": "Pyridoxine hydrochloride",
            "amount": "62mg"
        },
        {
            "name": "Biotin",
            "amount": "100μg"
        },
        {
            "name": "Folic acid",
            "amount": "500μg"
        },
        {
            "name": "Cyanocobalamin",
            "amount": "50μg"
        },
        {
            "name": "Calcium ascorbate dihydrate",
            "amount": "200mg"
        },
        {
            "name": "Colecalciferol (Vitamin D3)",
            "amount": "12.5μg (500IU)"
        },
        {
            "name": "d-alpha-Tocopheryl acid succinate",
            "amount": "41.3mg (50IU)"
        },
        {
            "name": "Inositol",
            "amount": "20mg"
        },
        {
            "name": "Calcium",
            "amount": "40mg"
        },
        {
            "name": "Iron",
            "amount": "5mg"
        },
        {
            "name": "Potassium",
            "amount": "100μg"
        },
        {
            "name": "Magnesium",
            "amount": "20mg"
        },
        {
            "name": "Manganese",
            "amount": "1mg"
        },
        {
            "name": "Chromium",
            "amount": "45μg"
        },
        {
            "name": "Selenium",
            "amount": "26μg"
        },
        {
            "name": "Silicon",
            "amount": "30mg"
        },
        {
            "name": "Zinc",
            "amount": "12mg"
        },
        {
            "name": "Panax ginseng",
            "amount": "5mg"
        }
    ]
},
{
    "productName": "BIOSOURCE Men's Mega Multivitamin",
    "link": "https://www.priceline.com.au/weight-and-vitamins/vitamins/multivitamins-and-minerals/biosource-men-s-mega-multivitamin-120-capsules",
    "vitaminInformation": [
        {
            "name": "Thiamine hydrochloride",
            "amount": "75mg"
        },
        {
            "name": "Riboflavin (Vitamin B2)",
            "amount": "75mg"
        },
        {
            "name": "Nicotinamide",
            "amount": "75mg"
        },
        {
            "name": "Calcium pantothenate (Equiv. Pantothenic acid Vitamin B5)",
            "amount": "69mg"
        },
        {
            "name": "Pyridoxine hydrochloride (Equiv. Pyridoxine (Vitamin B6)",
            "amount": "62mg"
        },
        {
            "name": "Cyanocobalamin",
            "amount": "50μg"
        },
        {
            "name": "Ascorbic acid (Vitamin C)",
            "amount": "100mg"
        },
        {
            "name": "Colecalciferol (Vitamin D3)",
            "amount": "12.5μg (500IU)"
        },
        {
            "name": "d-alpha-Tocopheryl acid succinate",
            "amount": "41.3mg (50IU)"
        },
        {
            "name": "Inositol",
            "amount": "20mg"
        },
        {
            "name": "Citrus bioflavonoids extract",
            "amount": "50mg"
        },
        {
            "name": "Calcium",
            "amount": "40mg"
        },
        {
            "name": "Iron",
            "amount": "5mg"
        },
        {
            "name": "Potassium (Potassium citrate)",
            "amount": "100μg"
        },
        {
            "name": "Magnesium (Magnesium oxide)",
            "amount": "50mg"
        },
        {
            "name": "Manganese (Manganese amino acid chelate)",
            "amount": "1mg"
        },
        {
            "name": "Chromium (Chromium picolinate)",
            "amount": "45μg"
        },
        {
            "name": "Selenium (Selenomethionine)",
            "amount": "150μg"
        },
        {
            "name": "Zinc (Zinc amino acid chelate)",
            "amount": "15mg"
        },
        {
            "name": "Panax ginseng ((Korean ginseng) from dry root 50mg)",
            "amount": "5mg"
        }
    ]
},
{
    "productName": "CENOVIS Once Daily 50+",
    "link": "https://www.priceline.com.au/weight-and-vitamins/vitamins/multivitamins-and-minerals/australian-naturalcare-men-s-pro-active-multi-60-tablets",
    "vitaminInformation": [
        {
            "name": "Calcium (as Carbonate)",
            "amount": "210mg"
        },
        {
            "name": "Riboflavin (Vitamin B2)",
            "amount": "4mg"
        },
        {
            "name": "Thiamine Nitrate (Vitamin B1)",
            "amount": "4mg"
        },
        {
            "name": "Cyanocobalamin (Vitamin B12)",
            "amount": "50μg"
        },
        {
            "name": "Pyridoxine hydrochloride (Vitamin B6)",
            "amount": "8mg"
        },
        {
            "name": "Nicotinamide (Vitamin B3)",
            "amount": "40mg"
        },
        {
            "name": "Calcium Pantothenate (Vitamin B5)",
            "amount": "22mg"
        },
        {
            "name": "Zinc - Oxide",
            "amount": "15mg"
        },
        {
            "name": "Ascorbic Acid as calcium ascorbate dihydrate (Vitamin C)",
            "amount": "120mg"
        },
        {
            "name": "Cod-liver oil (Vitamin A)",
            "amount": "131μg (438IU)"
        },
        {
            "name": "R.E. and Cholecalciferol 1.09mcg)",
            "amount": "175mg"
        },
        {
            "name": "d-alpha-Tocopherol (Vitamin E)",
            "amount": "33.6mg (501IU)"
        },
        {
            "name": "Magnesium - oxide heavy",
            "amount": "15mg"
        },
        {
            "name": "Retinyl Palmitate (Vitamin A)",
            "amount": "462μg (1540IU)"
        },
        {
            "name": "Iron - Ferrous Fumarate",
            "amount": "5mg"
        },
        {
            "name": "Folic Acid 300mcg Betacarotene 1.2mg",
            "amount": "1.2mg"
        },
        {
            "name": "Cholecalciferol (Vitamin D3)",
            "amount": "3.85μg (154IU)"
        },
        {
            "name": "Citrus Bioflavonoids extract",
            "amount": "2mg"
        },
        {
            "name": "Biotin (Vitamin H)",
            "amount": "150μg"
        },
        {
            "name": "Phytomenadione (Vitamin K1)",
            "amount": "15μg"
        },
        {
            "name": "Potassium Iodide (Iodine)",
            "amount": "150μg"
        },
        {
            "name": "Copper - Cupric Sulfate Anhydrous",
            "amount": "1mg"
        },
        {
            "name": "Chromium - Picolinate",
            "amount": "25μg"
        },
        {
            "name": "Manganese - Sulfate Monohydrate",
            "amount": "1mg"
        },
        {
            "name": "Selenium - Selenomethionine",
            "amount": "25μg"
        },
        {
            "name": "Boron - Borax",
            "amount": "3mg"
        },
        {
            "name": "Flaxseed Oil (Linseed Oil)",
            "amount": "287mg"
        }
    ]
},
{
    "productName": "Centrum Advance",
    "link": "https://www.priceline.com.au/weight-and-vitamins/vitamins/multivitamins-and-minerals/centrum-advance-100-tablets",
    "vitaminInformation": [
        {
            "name": "Vitamin A (as Retinyl Acetate) 300 micrograms Retinol Equivalents",
            "amount": "300μg"
        },
        {
            "name": "Betacarotene 1.8mg",
            "amount": "1.8mg"
        },
        {
            "name": "Cholecalciferol (Vitamin D3)",
            "amount": "15μg"
        },
        {
            "name": "Lutein",
            "amount": "500μg"
        },
        {
            "name": "Lycopene",
            "amount": "600μg"
        },
        {
            "name": "Phytomenadione (Vitamin K1)",
            "amount": "25μg"
        },
        {
            "name": "Calcium Pantothenate",
            "amount": "10.8mg"
        },
        {
            "name": "Thiamine Nitrate (Vitamin B1)",
            "amount": "2.18mg"
        },
        {
            "name": "Nicotinamide",
            "amount": "15mg"
        },
        {
            "name": "Riboflavin (Vitamin B2)",
            "amount": "3.2mg"
        },
        {
            "name": "Pyridoxine Hydrochloride (Vitamin B6)",
            "amount": "6mg"
        },
        {
            "name": "Cyanocobalamin (Vitamin B12)",
            "amount": "22μg"
        },
        {
            "name": "Biotin (Vitamin H)",
            "amount": "45μg"
        },
        {
            "name": "Folic Acid",
            "amount": "400μg"
        },
        {
            "name": "dl-alpha-tocopheryl Acetate (Vitamin E)",
            "amount": "50mg"
        },
        {
            "name": "Ascorbic Acid (Vitamin C)",
            "amount": "90mg"
        },
        {
            "name": "Calcium Carbonate 135.3mg and Calcium Hydrogen Phosphate 64.7mg (Calcium)",
            "amount": "200mg"
        },
        {
            "name": "Oxide (Magnesium)",
            "amount": "50mg"
        },
        {
            "name": "Ferrous Fumarate (Iron)",
            "amount": "5mg"
        },
        {
            "name": "Oxide (Zinc)",
            "amount": "7.5mg"
        },
        {
            "name": "Sulfate (Manganese)",
            "amount": "3.5mg"
        },
        {
            "name": "Chloride (Chromium)",
            "amount": "35μg"
        },
        {
            "name": "Sodium Selenate (Selenium)",
            "amount": "55μg"
        },
        {
            "name": "Sulfate (Copper)",
            "amount": "500μg"
        },
        {
            "name": "Potassium Iodide (Iodine)",
            "amount": "150μg"
        },
        {
            "name": "Calcium Hydrogen Phosphate (Phosphorus)",
            "amount": "50mg"
        },
        {
            "name": "Sulfate (Potassium)",
            "amount": "80mg"
        }
    ]
}]

    render(){
        const { wishlist } = this.state
        return(
            <Fragment>
                    <h2>My Wishlist</h2>

                    {wishlist.map(vitamin => (
                        <div><b>{vitamin.productName}</b></div>
                    ))}
            </Fragment>
        )
    }
}

export default UserWishlist