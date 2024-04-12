document.addEventListener("DOMContentLoaded", async()=>{
    const adat = [];
    const labels = [];
    const url = "https://retoolapi.dev/w3zDNu/diagram";

    function dataRead(){
     return fetch(url)
        .then(res => res.json())
        .then(data => diagram(data))
    }




     function diagram(data){
        
        if (data !== undefined) {
            for (let index = 0; index < data.length ; index++) {
                const mainData = data[index];
                adat[index] = mainData.ertek;
                labels[index]= mainData.id;
                 
             }
        }
       
        
        
    

     }
     await dataRead();
     diagram();

    
    
     
      
     /**
     * @type {HTMLCanvasElement}
    */
    
     
    // Canvas kiválasztása
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
   

     

     // Adatok
    

     // Oszlopdiagram rajzolása
     let barWidth = 20; // Oszlopok szélessége
     let spacing = 30; // Oszlopok közötti térköz
     let startX = 50; // Rajzolás kezdőpontja x-koordináta
     let startY = 350; // Rajzolás kezdőpontja y-koordináta
     let maxValue = Math.max.apply(null, adat); // Legnagyobb érték meghatározása

     ctx.fillStyle = 'blue'; // Oszlopok színe
     for (let i = 0; i < adat.length; i++) {
         let height = (adat[i] / maxValue) * 300; // Oszlop magassága
         ctx.fillRect(startX + i * (barWidth + spacing), startY - height, barWidth, height); // Oszlop rajzolása
     }

     // Címkék hozzáadása
     ctx.fillStyle = 'black'; // Címkék színe
     ctx.font = '16px Arial';
     for (let i = 0; i < labels.length; i++) {
         ctx.fillText(labels[i], startX + i * (barWidth + spacing), startY + 20); // Címke rajzolása
     }
     
   
})

     

