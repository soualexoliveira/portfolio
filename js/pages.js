'use strict'
const gallery = document.querySelectorAll('.imgs-project'),
modal = document.querySelector('.modal'),
modalImg = modal.querySelector('#modal_img'),
modalVideo = modal.querySelector('#modal_video'),
btClose = modal.querySelector('#bt_close'),
shadow = document.querySelector('.bg-modal');

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                let selectedNode = gallery[newIndex].querySelector("img, video");
                if (selectedNode.tagName === 'IMG') {
                    modalImg.src = selectedNode.src;
                    modalImg.style.display = 'block';
                    modalVideo.style.display = 'none';
                } else if (selectedNode.tagName === 'VIDEO') {
                    modalVideo.src = selectedNode.querySelector('source').src;
                    modalImg.style.display = 'none';
                    modalVideo.style.display = 'block';
                }
            }

            const prevBtn = document.querySelector("#bt_prev");
            const nextBtn = document.querySelector("#bt_next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview();
            modal.classList.add("active");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            btClose.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                modal.classList.remove("active");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }

            shadow.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                modal.classList.remove("active");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
};