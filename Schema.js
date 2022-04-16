
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import {userSchema} from '/Users/dcarav77/twitterblockchainapp/twitter-clone-blockchain/sanitytwitterclone/schemas/userSchema.js'
import { tweetSchema } from '/Users/dcarav77/twitterblockchainapp/twitter-clone-blockchain/sanitytwitterclone/schemas/TweetSchema.js'


export default createSchema({
  
  name: 'default',
  types: schemaTypes.concat([userSchema, tweetSchema]),
});
