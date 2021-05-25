<template>
  <div>
    <b-jumbotron>
      <template #header>Featured items</template>

      <hr class="my-4">

      <div id="Cards_div">
        <b-card
        title="Item 1"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 Cards"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's     content.
          </b-card-text>

          <b-button href="#" variant="primary">Add to cart</b-button>
        </b-card>

        <b-card
        title="Item 2"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 Cards"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's     content.
          </b-card-text>

          <b-button href="#" variant="primary">Add to cart</b-button>
        </b-card>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    border: 0;
    padding: 0;
  }
  #Cards_div{
    margin: 15px;
    display: flex;
  }
  .Cards{
    margin: 15px;
  }
</style>
