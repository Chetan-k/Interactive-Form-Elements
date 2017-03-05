    /**
     * Created by CRK on 6/14/16.
     */
    
    var data = new Object;
    
    data["firstSelect"] = ['Please select your type of dish','Dish-type','Indian','Chinese','Mexican','Italian'];
    
    //Indian restaurants and food
    data["Indian"] = ['Which restaurant do you prefer?','Select-Restaurant','Amaya Indian Cuisine','Indian House','Raj Mahal','Tandoor of India','Thali of India'];
    data["Amaya Indian Cuisine"] = ['What do you want to eat?','Pick-Your-Dish','Chicken Palak','Chicken Vindaloo','Shrimp Biryani','Daal Makhani','Fish Moiel'];
    data["Indian House"] = ['What do you want to eat?','Pick-Your-Dish','Chicken Samosa','Paneer Pakora','Salmon Tikka','Gobi Aloo'];
    data["Raj Mahal"] = ['What do you want to eat?','Pick-Your-Dish','Masala Dosa','Uthappam','Kadai Beef','Matar Paneer','Navartan Korma'];
    data["Tandoor of India"] = ['What do you want to eat?','Pick-Your-Dish','Chicken Kashmiri','Lamb Mashroom','Seafood Masala'];
    data["Thali of India"] = ['What do you want to eat?','Pick-Your-Dish','Dal Tarka','Naan Bread','Gajar Halwa','Bisi Bele Bath'];
    
    data["Dal Tarka"] = ['Pick your dessert','dessert','Banbury cake','Garash cake'];
    data["Gajar Halwa"] = ['Pick your dessert','dessert','Genoa cake','Velvet cake'];
    
    data["Masala Dosa"] = ['Pick your dessert','dessert','Happy cake','Rock cake'];
    data["Kadai Beef"] = ['Pick your dessert','dessert','Bougasta','Diples'];
    data["Navartan Korma"] = ['Pick your dessert','dessert','Dondurma','Nougat'];
    
    data["Chicken Palak"] = ['Pick your dessert','dessert','Cendol','Finikia'];
    data["Shrimp Biryani"] = ['Pick your dessert','dessert','Charlotte','Melktert'];
    
    
    
    //Chinese restaurants and food
    data["Chinese"] = ['Which restaurant do you prefer?','Select-Restaurant','Chen Garden','Jing Le Chinese Food','Yummy Garden','Bamboo House'];
    data["Chen Garden"] = ['What do you want to eat?','Pick-Your-Dish','Jumbo Shrimp','Crispy ToFu','Crab Rangoon','Shrimp toast'];
    data["Jing Le Chinese Food"] = ['What do you want to eat?','Pick-Your-Dish','Hunan Roast Poark','Moo Shu Vegetable','Chicken Lo Mein','Pork Chow Mei Fun'];
    data["Yummy Garden"] = ['What do you want to eat?','Pick-Your-Dish','Thai Salad','Egg Drop Soup','Fried Wonton','Pupu Platter'];
    data["Bamboo House"] = ['What do you want to eat?','Pick-Your-Dish','Fried Scallops','Pepper Triboro','California Roll','Shrimp Tempura'];
    
    //Mexican restaurants and food
    data["Mexican"] = ['Which restaurant do you prefer?','Select-Restaurant','Monte Alban','Johns TexMex Eatery','Dorado'];
    data["Monte Alban"] = ['What do you want to eat?','Pick-Your-Dish','Flautas','Jacoque','Lengua','Ecote'];
    data["Johns TexMex Eatery"] = ['What do you want to eat?','Pick-Your-Dish','Corunda','Burritos','Panucho','Salbutes'];
    data["Dorado"] = ['What do you want to eat?','Pick-Your-Dish','Sopes','Pozole','Taquitos','Totapo'];
    
    data["Flautas"] = ['Pick your dessert','dessert','Asida','Bazeen'];
    data["Lengua"] = ['Pick your dessert','dessert','Haupia','Junket'];
    data["Sopes"] = ['Pick your dessert','dessert','Bebnica','Kutia'];
    data["Taquitos"] = ['Pick your dessert','dessert','Crostata','Flummery'];
    
    
    
    //Italian restaurants and food
    data["Italian"] = ['Which restaurant do you prefer?','select-Restaurant','Pane Rino on the River','The Pasta Villa','Ristorante Lucano','Rizzi Restaurant'];
    data["Pane Rino on the River"] = ['What do you want to eat?','Pick-Your-Dish','Articlokes French','Caesar Salad','Cajun Chicken','Caprese'];
    data["The Pasta Villa"] = ['What do you want to eat?','Pick-Your-Dish','Calamari Scampi','Calms Catino','Broccoli French','Stuffed Escate'];
    data["Ristorante Lucano"] = ['What do you want to eat?','Pick-Your-Dish','Primi Piatti','Insalata Lucana','Monterosa'];
    data["Rizzi Restaurant"] = ['What do you want to eat?','Pick-Your-Dish','Baked Lasanga','Macroni and Beans','Gnocchi','Julienne Salad'];
    
    
    //Indian food images
    data["Cendol"] = [null,'images/Dishes/ChiCen.jpg'];
    data["Finikia"] = [null,'./images/Dishes/ChiFin.jpg'];
    
    data["Chicken Vindaloo"] = [null,'./images/Dishes/Chicken Vindaloo.jpg'];
    data["Charlotte"] = [null,'./images/Dishes/ShrCha.jpg'];
    data["Melktert"] = [null,'./images/Dishes/ShrMel.jpg'];
    
    data["Daal Makhani"] = [null,'./images/Dishes/Daal Makhani.jpg'];
    data["Fish Moiel"] = [null,'./images/Dishes/Fish Moiel.jpg'];
    
    data["Chicken Samosa"] = [null,'./images/Dishes/Chicken Samosa.jpg'];
    data["Paneer Pakora"] = [null,'./images/Dishes/Paneer Pakora.jpg'];
    data["Salmon Tikka"] = [null,'./images/Dishes/Salmon Tikka.jpg'];
    data["Gobi Aloo"] = [null,'./images/Dishes/Gobi Aloo.jpg'];
    
    data["Happy cake"] = [null,'./images/Dishes/MasHap.jpg'];
    data["Rock cake"] = [null,'./images/Dishes/MasRoc.jpg'];
    
    
    data["Uthappam"] = [null,'./images/Dishes/Uthappam.jpg'];
    data["Bougasta"] = [null,'./images/Dishes/KadBou.jpg'];
    data["Diples"] = [null,'./images/Dishes/KadDip.jpg'];
    
    data["Matar Paneer"] = [null,'./images/Dishes/Matar Paneer.jpg'];
    data["Dondurma"] = [null,'./images/Dishes/NavDon.jpg'];
    data["Nougat"] = [null,'./images/Dishes/NavNou.jpg'];
    
    data["Chicken Kashmiri"] = [null,'./images/Dishes/Chicken Kashmiri.jpg'];
    data["Lamb Mashroom"] = [null,'./images/Dishes/Lamb Mashroom.jpg'];
    data["Seafood Masala"] = [null,'./images/Dishes/Seafood Masala.jpg'];
    
    data["Banbury cake"] = [null,'./images/Dishes/DalBan.jpg'];
    data["Garash cake"] = [null,'./images/Dishes/DalGar.jpg'];
    
    data["Naan Bread"] = [null,'./images/Dishes/Naan Bread.jpg'];
    
    data["Genoa cake"] = [null,'./images/Dishes/GajGen.jpg'];
    data["Velvet cake"] = [null,'./images/Dishes/GajVel.jpg'];
    
    data["Bisi Bele Bath"] = [null,'./images/Dishes/Bisi Bele Bath.jpg'];
    
    //Chinese food images
    data["Jumbo Shrimp"] = [null,'./images/Dishes/Jumbo Shrimp.jpg'];
    data["Crispy ToFu"] = [null,'./images/Dishes/Crispy ToFu.jpg'];
    data["Crab Rangoon"] = [null,'./images/Dishes/Crab Rangoon.jpg'];
    data["Shrimp toast"] = [null,'./images/Dishes/Shrimp toast.jpg'];
    
    data["Hunan Roast Poark"] = [null,'./images/Dishes/Hunan Roast Poark.jpg'];
    data["Moo Shu Vegetable"] = [null,'./images/Dishes/Moo Shu Vegetable.jpg'];
    data["Chicken Lo Mein"] = [null,'./images/Dishes/Chicken Lo Mein.jpg'];
    data["Pork Chow Mei Fun"] = [null,'./images/Dishes/Pork Chow Mei Fun.jpg'];
    
    data["Thai Salad"] = [null,'./images/Dishes/Thai Salad.jpg'];
    data["Egg Drop Soup"] = [null,'./images/Dishes/Egg Drop Soup.jpg'];
    data["Fried Wonton"] = [null,'./images/Dishes/Fried Wonton.jpg'];
    data["Pupu Platter"] = [null,'./images/Dishes/Pupu Platter.jpg'];
    
    data["Fried Scallops"] = [null,'./images/Dishes/Fried Scallops.jpg'];
    data["Pepper Triboro"] = [null,'./images/Dishes/Pepper Triboro.jpg'];
    data["California Roll"] = [null,'./images/Dishes/California Roll.jpg'];
    data["Shrimp Tempura"] = [null,'./images/Dishes/Shrimp Tempura.jpg'];
    
    //Mexican food images
    data["Asida"] = [null,'./images/Dishes/FlaAsi.jpg'];
    data["Bazeen"] = [null,'./images/Dishes/FlaBaz.jpg'];
    
    
    data["Jacoque"] = [null,'./images/Dishes/Jacoque.jpg'];
    data["Haupia"] = [null,'./images/Dishes/LenHau.jpg'];
    data["Junket"] = [null,'./images/Dishes/LenJun.jpg'];
    
    data["Ecote"] = [null,'./images/Dishes/Ecote.jpg'];
    
    data["Corunda"] = [null,'./images/Dishes/Corunda.jpg'];
    data["Burritos"] = [null,'./images/Dishes/Burritos.jpg'];
    data["Panucho"] = [null,'./images/Dishes/Panucho.jpg'];
    data["Salbutes"] = [null,'./images/Dishes/Salbutes.jpg'];
    
    data["Bebnica"] = [null,'./images/Dishes/SopBeb.jpg'];
    data["Kutia"] = [null,'./images/Dishes/SopKut.jpg'];
    
    data["Pozole"] = [null,'./images/Dishes/Pozole.jpg'];
    data["Crostata"] = [null,'./images/Dishes/TaqCro.jpg'];
    data["Flummery"] = [null,'./images/Dishes/TaqFlu.jpg'];
    
    data["Totapo"] = [null,'./images/Dishes/Totapo.jpg'];
    
    //Italian food imaages
    data["Articlokes French"] = [null,'./images/Dishes/Articlokes French.jpg'];
    data["Caesar Salad"] = [null,'./images/Dishes/Caesar Salad.jpg'];
    data["Cajun Chicken"] = [null,'./images/Dishes/Cajun Chicken.jpg'];
    data["Caprese"] = [null,'./images/Dishes/Caprese.jpg'];
    
    data["Calamari Scampi"] = [null,'./images/Dishes/Calamari Scampi.jpg'];
    data["Calms Catino"] = [null,'./images/Dishes/Calms Catino.jpg'];
    data["Broccoli French"] = [null,'./images/Dishes/Broccoli French.jpg'];
    data["Stuffed Escate"] = [null,'./images/Dishes/Stuffed Escate.jpg'];
    
    data["Primi Piatti"] = [null,'./images/Dishes/Primi Piatti.jpg'];
    data["Insalata Lucana"] = [null,'./images/Dishes/Insalata Lucana.jpg'];
    data["Monterosa"] = [null,'./images/Dishes/Monterosa.jpg'];
    
    data["Baked Lasanga"] = [null,'./images/Dishes/Baked Lasanga.jpg'];
    data["Macroni and Beans"] = [null,'./images/Dishes/Macroni and Beans.jpg'];
    data["Gnocchi"] = [null,'./images/Dishes/Gnocchi.jpg'];
    data["Julienne Salad"] = [null,'./images/Dishes/Julienne Salad.jpg'];
    
    
    
