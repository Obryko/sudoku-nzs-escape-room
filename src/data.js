const data = () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            "password": "test",
            "message": "Kupa!"
        });
        }, 2000);
      }
    );
// .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))

export default data;