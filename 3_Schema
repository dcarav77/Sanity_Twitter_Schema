import {BsStars} from 'react-icons/bs'
import TweetBox from '/Users/dcarav77/twitterblockchainapp/twitter-clone-blockchain/pages/components/4_Tweet_Box.js'
import Post from './Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: 'sticky top-0 bg-[#1520b] z-10 p-4 flex justify-between items-center',
    headerTitle: 'text-xl font-bold',
}
const tweets = [
    {
        displayName: 'DustinCar',
        userName: '0xcde6d34dDcB5777540D391C0d075458D9869276C',
        avatar: 'https://d1bvpoagx8hqbg.cloudfront.net/259/ce697834bacdad2949bb49edd98bea34.jpg',
        text: 'yoyo',
        isProfileImageNft: false,
        timestamp: '2022-03-30T09:10:36Z',
    },
    {
        displayName: 'DustinCar',
        userName: '0xcde6d34dDcB5777540D391C0d075458D9869276C',
        avatar: 'https://d1bvpoagx8hqbg.cloudfront.net/259/ce697834bacdad2949bb49edd98bea34.jpg',
        text: 'yoyo',
        isProfileImageNft: false,
        timestamp: '2021-03-30T09:10:36Z',
       },
       {
        displayName: 'DustinCar',
        userName: '0xcde6d34dDcB5777540D391C0d075458D9869276C',
        avatar: 'https://d1bvpoagx8hqbg.cloudfront.net/259/ce697834bacdad2949bb49edd98bea34.jpg',
        text: 'yoyo',
        isProfileImageNft: false,
        timestamp: '2020-03-30T09:10:36Z',
       },
]

function Feed(){
   return (
    <div className={style.wrapper}>
    <div className={style.header}>
    <div className={style.headerTitle}>Home</div>
        <BsStars />
        </div>
        <TweetBox/>
        {tweets.map ((tweet, index,) => (
            <Post
                key= {index}
                displayName = {tweet.displayName}
                userName= {'${tweet.userName.slice}(0,4)}...${tweet.userName -4 )}'}
                avatar= {tweet.avatar}
                text= {tweet.text}
                isProfileImageNft= {tweet.isProfileImageNft}
                timestamp= {tweet.timestamp}
            />
        ))}
        </div> 
   )
}
export default Feed 
