<!-- 버튼클릭시 추가이미지 구현 -->
const listPic = document.querySelector('.catcontainer3');
const btn = document.querySelector('.button3');
let pageToPatch = 1;

btn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

async function fetchImages(page){
  try{
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }

    const datas = await response.json();
    makeImageList(datas);

  } catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
  }
}

<!-- 모달구현 -->
document.querySelector("#openmodal").addEventListener("click", function (){document.querySelector(".modal").style.display = 'flex'})
document.querySelector("#close").addEventListener("click", function (){document.querySelector(".modal").style.display = 'none'})
