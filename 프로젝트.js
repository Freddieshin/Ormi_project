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
<!-- 카카오맵 api구현 -->
<p class="maptext">Where you'll be</p>
<p class="adress">78, Digital-ro 10-gil, Geumcheon-gu, Seoul, Republic of Korea</p>
<!-- 지도를 표시할 div 입니다 -->
<div id="map" style="width:1278px; height:520px;"></div>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8ccd9c3f2c7564d10cde92b8dbd1884a"></script>
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
  center: new kakao.maps.LatLng(37.4745063, 126.8897151), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
};
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);
<!-- 모달구현 -->
document.querySelector("#openmodal").addEventListener("click", function (){document.querySelector(".modal").style.display = 'flex'})
document.querySelector("#close").addEventListener("click", function (){document.querySelector(".modal").style.display = 'none'})
