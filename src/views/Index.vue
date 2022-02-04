<template>  
    <Section1/>
    <SectionTwo/>
    <Motto/>
    <SectionFour/>
    <Team/>
    <Footer/>
</template>

<script>
import Section1 from '../components/Section1.vue'
import SectionTwo from '../components/SectionTwo.vue'
import Motto from '../components/Motto.vue'
import SectionFour from '../components/SectionFour.vue'
import Team from '../components/Team.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Index',
    components: {
        Section1, 
        SectionTwo, 
        Motto,
        SectionFour,
        Team,
        Footer
    }
}
</script>