const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')


async function main() {

  // Create a new link
  const newLink = await prisma.createLink({ 
    url: 'www.prisma.io',
    description: 'Prisma replaces traditional ORMs',
  })
  console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

  // Read all links from the database and print them to the console
  const allLinks = await prisma.links()
  console.log(allLinks)
}

main().catch(e => console.error(e))

/*

// 2  
  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      // 2
      feed: (root, args, context, info) => {
        return context.prisma.links()
      },
    },

    Mutation: {
        // 2
        post: (parent, args, context) => {
          return context.prisma.createLink({
            url: args.url,
            description: args.description,
          })
        }
      }, 
  }

// 3
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers,
    context: { prisma },
})


server.start(() => console.log(`Server is running on http://localhost:4000`))

*/