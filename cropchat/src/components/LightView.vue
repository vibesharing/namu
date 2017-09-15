<template>
  <lightbox
     id="mylightbox"
     :images="images"
     :image_class=" 'img-responsive img-rounded img-regulated-height' "
     :album_class=" 'my-album-class' ">
   </lightbox>
</template>
<script>
  import Lightbox from 'vue-simple-lightbox'

  export default {
    methods: {
    },
    components: {
      Lightbox
    },
    data () {
      return {
        'images': [
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img1.jpg',
            'title': 'Image 2'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img2.jpg',
            'title': 'Image 3'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img3.jpg',
            'title': 'Image 4'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img4.jpg',
            'title': 'Image 5'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img1.jpg',
            'title': 'Image 2'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img2.jpg',
            'title': 'Image 3'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img3.jpg',
            'title': 'Image 4'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img4.jpg',
            'title': 'Image 5'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img1.jpg',
            'title': 'Image 2'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img2.jpg',
            'title': 'Image 3'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img3.jpg',
            'title': 'Image 4'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img4.jpg',
            'title': 'Image 5'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img1.jpg',
            'title': 'Image 2'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img2.jpg',
            'title': 'Image 3'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img3.jpg',
            'title': 'Image 4'
          },
          {
            'src': 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img4.jpg',
            'title': 'Image 5'
          }
        ]
      }
    }
  }
</script>
<style>
  .img-regulated-height {
    height: 150px !important;
    width: auto !important;
  }
</style>
