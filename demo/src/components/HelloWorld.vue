<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    info: String
  },
  data () {
    return {
      temp: ''
    }
  },
  mounted () {
    // this.initSet()
    this.initMap()
  },
  methods: {
    initSet(){
      const mySet = new Set()
      mySet.add("123456")
      mySet.add("123")

      mySet.delete("1234")
      // mySet.clear()
      let pd = mySet.has("1234")

      let myC =  [...mySet].forEach(item => {
        console.log(item)
      })

      console.log([...mySet])
      console.log(Array.from(mySet))
      console.log(mySet,pd)
    },
    initMap() {
      const myMap = new Map()

      myMap.set("val1","123")
      myMap.set("val2","456")
      myMap.set("val3","789")
      console.log(myMap.get("val1"))
      console.log(myMap.size)
      console.log(myMap.keys())
      console.log(myMap.values())
      myMap.
      // myMap.clear()
      myMap.delete("val2")
      console.log(myMap.has("val2"))
      console.log(myMap.entries())
      console.log(myMap)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
