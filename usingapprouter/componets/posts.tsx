
// type Props = {
//     delay: number;
//   };
  
//   type Post = {
//     userId: string;
//     id: number;
//     title: string;
//     body: string;
//   };
  
  export default async function Post() {
    // const randomPostId = getRandomInt(1, 100);
    // const url = `https://jsonplaceholder.typicode.com/posts/${randomPostId}`;
    const res = await fetcdummyhData()
  
    return <li>THere comes the delayed data ::::::{res}</li>;
  }


// fetchData.ts
 export async function fetcdummyhData(): Promise<string> {
    const randomDelay = getRandomArbitrary(1000, 3000); // Random delay between 1 and 3 seconds
    await pause(randomDelay);
    return 'Data fetched successfully!';
  }
  
  function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  
  function pause(ms: number): Promise<void> {
    //for seeing the error page try it with reject
    return new Promise((resolve,reject) => setTimeout(resolve, ms));
  }
  