<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  import Unsplash, { toJson } from 'unsplash-js'
  export default {
    data () {
      return {
        'catUrl': '',
        'title': ''
      }
    },
    computed: {
      isCatLoaded: function () {
        return this.catUrl !== ''
      }
    },
    mounted () {
      const unsplash = new Unsplash({
        applicationId: '286fafaee38d06dc86ca2e34e328913ca235c8d08f43428fdd8279602debee9d',
        secret: '077f5cdeaebe042637df6cf1bd9758d312d2cf46de46d634821d60506a04e4d2',
        callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
      })

      unsplash.users.profile('vibesharing')
      .then(toJson)
      .then(json => {
        console.log(json)
      })
    },
    methods: {
      postCat () {
        this.$root.$firebaseRefs.cat.push(
          {
            'url': this.catUrl,
            'comment': this.title,
            'info': 'Posted by Charles on Tuesday',
            'created_at': -1 * new Date().getTime()
          }
        ).then(
          this.$router.push('/')
        )
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
  .mdl-spinner {
    position: relative;
    top: 50%;
    left: 50%;
  }
</style>
