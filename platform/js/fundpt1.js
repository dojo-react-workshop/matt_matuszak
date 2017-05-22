var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var newNinjaProp in newNinja) {
    console.log(newNinjaProp, ":", newNinja[newNinjaProp])
}
