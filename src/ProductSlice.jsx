import { createSlice } from "@reduxjs/toolkit";
var ProductSlice=createSlice(
    {
        name:"product",
        initialState:
        {
             productlist:[
                
            {
                id: 11,
                name: "Laka Laka",
                category: "Wax",
        
                price: 379,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/wax2.jpg",
                description:
                "A row of intricately detailed idols depicting Goddess Lakshmi, Lord Ganesha, and other traditional deities, hand-carved from warm, golden-hued beeswax and resting on a rustic wooden workshop ledge.."
            },
            {
                id: 12,
                name: "Wax cape Dolls",
                category: "Wax",
                brand: "Lenovo",
                price: 54999,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/wax3.jpg",
                description:
                "A charming lineup of vintage-style dolls with delicately molded wax faces, hands, and feet, dressed in rustic floral dresses, lace bonnets, and seated beside tailoring spools and pattern sketches."
            },

            {
                id: 2,
                name: "Tea Cups",
                category: "Pottery",

                price: 300,
                discount: 12,
                rating: 4.6,
                stock: 18,
                image:
                "https://images.pexels.com/photos/4071895/pexels-photo-4071895.jpeg",
                description:
                "Elegant handmade tea cups featuring beautiful blue pottery designs. Ideal for serving tea or coffee and adding an artistic touch to your table."
            },

            {
                id: 3,
                name: "Clay Diyas",
                category: "Pottery",
            
                price: 450,
                discount: 8,
                rating: 4.5,
                stock: 14,
                image:
                "https://images.pexels.com/photos/18979384/pexels-photo-18979384.jpeg",
                description:
                "Traditional handmade clay diyas designed to brighten your home. Perfect for festivals, pooja rooms, and special occasions."
            },

            {
                id: 4,
                name: "Water Pots",
                category: "Pottery",
             
                price: 114999,
                discount: 7,
                rating: 4.9,
                stock: 10,
                image:
                "https://media.istockphoto.com/id/1412187320/photo/a-classic-picture-of-earthen-pots-used-in-storing-cool-water-in-the-summer-months-in-hot.jpg?b=1&s=612x612&w=0&k=20&c=lYKvzEqsFPrmiRp284_lbUt0MkWqOgbALLzm6Bmnv-o=",
                description:
                "A natural clay water pot that helps keep drinking water cool. Its traditional design makes it both useful and decorative."
            },

            

            {
                id: 6,
                name: "Idols",
                category: "Pottery",
                brand: "HP",
                price: 700,
                discount: 13,
                rating: 4.4,
                stock: 20,
                image:
                "https://images.pexels.com/photos/35278780/pexels-photo-35278780.jpeg",
                description:
                "Compact everyday laptop suitable for students, office work and browsing."
            },

            
            {
                id: 8,
                name: "Blooming Beeswax Peony",
                category: "wax",
              
                price: 599,
                discount: 20,
                rating: 4.8,
                stock: 15,
                image:
                "/assets/wax8.jpg",
                description:
                "An organic botanical wax sculpture featuring an open, layered peony flower with delicate ruffled petals, twisting stems, and carved foliage mounted as a single decorative centerpiece."
            },
            {
                id: 9,
                name: "",
                category: "Wax",
                brand: "Lenovo",
                price: 54999,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/wax7.jpg",
                description:
                "A standalone, multi-headed, multi-armed female deity sculpture finely hand-carved from pure beeswax, standing proudly on a wooden pedestal with carving shavings scattered below."
            },
            {
                id: 18,
                name: "Tiger",
                category: "Paintings",
          
                price: 400,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint6.jpg",
                description:
                "Slim laptop with a comfortable keyboard and modern design for everyday computing."
            },
             {
                id: 1,
                name: "Flower Vase",
                category: "Pottery",
                price: 250,
                discount: 10,
                rating: 4.7,
                stock: 25,
                image:
                "https://images.pexels.com/photos/35990365/pexels-photo-35990365.jpeg",
                description:
                "A beautifully handcrafted terracotta vase made from natural clay. Perfect for decorating living rooms, bedrooms, and office spaces with a traditional touch."
            },

            {
                id: 10,
                name: "Sculptures",
                category: "Wax",
               
                price: 54999,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/wax5.jpg",
                description:
                "An artisan’s active crafting table featuring gothic castle-shaped wax models, deep green and burgundy carved pillar candles with intricate leaf relief patterns, carving tools, and silicone molds."
            },
            
            {
                id: 7,
                name: "The Royal Wax Peacock",
                category: "Wax",
        
                price: 699,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/wax1.jpg",
                description:
                "A graceful, single peacock sculpture carved out of golden natural beeswax, displaying an ornate feather crest and an elongated tail with plumage textures draping over a wooden stool."
            },

            {
                id: 13,
                name: "The Tree of Life and the Peacock",
                category: "Paintings",
               
                price: 1200,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint1.jpg",
                description:
                "This handcrafted folk art painting, reminiscent of the traditional Indian Madhubani or Kalamkari style, is displayed on a weathered wooden easel in a artist's workshop"
            },
            {
                id: 14,
                name: "HandCraft",
                category: "Paintings",
                
                price: 54999,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint2.jpg",
                description:
                "Slim laptop with a comfortable keyboard and modern design for everyday computing."
            },
            {
                id: 5,
                name: "Clay Turtle",
                category: "Pottery",
                
                price: 300,
                discount: 15,
                rating: 4.7,
                stock: 12,
                image:
                "https://media.istockphoto.com/id/951053920/photo/cute-green-turtle-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=02dD5pRjxqYz2voAVe-wmCDxV-eQib5CqIOeBpS0-N0=",
                description:
                "A charming handmade clay turtle showpiece with traditional detailing. Perfect for decorating shelves, tables, and living spaces."
            },
            {
                id: 17,
                name: "Temple",
                category: "Paintings",
                brand: "Lenovo",
                price: 1250,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint5.jpg",
                description:
                "Slim laptop with a comfortable keyboard and modern design for everyday computing."
            },
            {
                id: 15,
                name: "Temple",
                category: "Paintings",
            
                price: 1950,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint3.jpg",
                description:
                "Slim laptop with a comfortable keyboard and modern design for everyday computing."
            },
            {
                id: 16,
                name: "Temple",
                category: "Paintings",
        
                price: 600,
                discount: 16,
                rating: 4.3,
                stock: 24,
                image:
                "/assets/paint4.jpg",
                description:
                "Slim laptop with a comfortable keyboard and modern design for everyday computing."
            }
            
            
            ],
            selectedProduct:null,
          updatedProduct:null
        },
        reducers:
        {

            addProducts:(state,action)=>
            {
                state.productlist.push(action.payload);
            },
            getOne:(state,action)=>
            {
                state.selectedProduct=state.productlist.find((obj)=>obj.id==action.payload)

            },
            selectToUpdate:(state,action)=>
            {
                state.updatedProduct=state.productlist.find((obj)=>
                (
                    obj.id==action.payload
                ))
            },
            updateNow:(state,action)=>
            {
                    var ind=state.productlist.findIndex((obj)=>
                    (
                        obj.id==action.payload.id
                    ))
                    if(ind!=-1){
                        state.productlist.splice(ind,1,action.payload)
                    }
        
            },
             deleteFromList:(state,action)=>
            {
               
                state.productlist=state.productlist.filter((obj)=>obj.id!==action.payload)
            }
          

        }
    }
)
export const{addProducts,getOne,selectToUpdate,updateNow,deleteFromList}=ProductSlice.actions
export default ProductSlice.reducer
