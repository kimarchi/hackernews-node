function feed(parent, args, context, info) {
    return context.prisma.links()
  }

function info(parent, args, context, info) {
    return 'test'
  }
  module.exports = {
    feed,
    info,
  }