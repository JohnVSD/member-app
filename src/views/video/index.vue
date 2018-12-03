<template>
  <div class="videobox">
    <video id="video1"
      :src="src"
      :poster="poster"
      preload="auto"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
    >
    </video>
    <button id="btn">播放</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: require('@/assets/img/1531452146363729.mp4'),
      poster: require('@/assets/img/video-bj.png')
    }
  },
  mounted () {
    const MyVideo = document.getElementById('video1')
    const Btn = document.getElementById('btn')
    const ClientWidth = document.documentElement.clientWidth
    // const ClientHeight = document.documentElement.clientHeight
    MyVideo.style.width = ClientWidth + 'px'
    MyVideo.style.height = 'auto'
    Btn.addEventListener('click', function () {
      MyVideo.play()
      // Btn.style.display = 'none'
    })
  }
}
</script>

<style scoped lang="less">
.videobox{
  position: relative;
  width: 100%;
  height: 100%;
  button{
    width: 50px;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -25px;
    background: #fff;
    cursor: pointer;
  }
}
</style>
