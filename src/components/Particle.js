import React from 'react'
import Particles from 'react-particles-js'

function Particle() {
  return (
    <>
    <Particles width='100%' height='100vh'
      params={{
        "particles":{"number":{"value":104,"density":{"enable":true,"value_area":552.4033491425909}},
        "color":{"value":"#4390d8"},
        "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
        "polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},
        "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
        "size":{"value":3,"random":true,"anim":{"enable":false,"speed":19.489853095232284,"size_min":0.1,"sync":false}},
        "line_linked":{"enable":false,"distance":150,"color":"#229dce","opacity":0.4,"width":1},
        "move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
        "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":false},
        "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
        "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}
        }},
        }}
    
    >

    </Particles>
    </>
  )
}

export default Particle
