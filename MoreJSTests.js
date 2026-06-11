let size = [3, 2.1];
let pix = 0;



class Micah {
    constructor(Attractive, Gay, Likes_Freshmen){
    this.Attractive = Attractive;
    this.Gay = Gay;
    this.Likes_Freshmen = Likes_Freshmen;
    }
    getAttractive() {
        return this.Attractive;
    }
    getGay() {
        return this.Gay;
    }
    getLikes_Freshmen() {
        return this.Likes_Freshmen;
    }
}


 let Marco = new Micah(true, "gay", "Every Freshman");
 if(Marco!=null){
    console.log('Marco exists');
    console.log(`Attractive?: ${Marco.getAttractive().toString()}`);
    console.log(`Sexuality?: ${Marco.getGay()}`);
    console.log(`Does he like Freshmen: ${Marco.getLikes_Freshmen()}`);
 }


 for(let i = 1; i<1000; i++){
    console.log(`iteration ${i}`);
 }

function changeText() {
    let it_para = document.getElementById('Iteration 1')
    if (it_para) {
        for (let i = 1; i<100; i++){
            it_para = document.getElementById(`Iteration ${i}`)
            it_para.remove();
        }
    }
    else{
    for(let i = 1; i<100; i++){
    const paragraph = document.createElement('p');
    paragraph.id = `Iteration ${i}`;
    paragraph.className = "iteration";
    paragraph.textContent = `Iteration ${i}`;
    document.body.appendChild(paragraph);
        }
    }
}

function addImg(){
    const img = document.createElement('img');
    img.id = "Marco_Photo";
    img.src = "images/kawaii marco.png";
    img.alt = "Marco";
    img.width = size[0];
    img.height = size[1];
    document.body.appendChild(img);
    size[0] *= 1.5
    size[1] *= 1.5
}

function getpixels(){
    return pix++;
}