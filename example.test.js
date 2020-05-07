function fetchData(callback){
    setTimeout(() => {
      callback('peanut butter')
    }, 2000);
  }
  
  test('the data is peanut butter [callback]', done => {
    //cualquier funcion que se iba a llamar en el proyecto, ahora llamo un callback para testear
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });
  
  
  const randomPromotion = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(true)
      } else {
        reject(false)
      }
    }, 1000);
  });
  
  /*randomPromotion
  .then(res => console.log(res)).
  catch(err => console.log(err))*/
  
  test('the values is true [Promise]', () => {
    return expect(randomPromotion).resolves.toBeTruthy();
  });
  
  const great = new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 1000);
  });
  
  test('the data is peanut butter', () => {
    return great.then(data => {
      expect(data).toBe('peanut butter');
    });
  });
  
  /*test('the data is peanut butter', async () => {
    const data = await randomPromotion;
    expect(data).toBeTruthy;
  });*/