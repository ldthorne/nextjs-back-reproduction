const Page = () => (
  <div>
    <p>Welcome to next.js!</p>
    <a href="#test-link">
      go somewhere
    </a>
    <div style={{height: '500px', width: '100%'}} />
    <div style={{height: '500px', width: '100%'}} />
    <div style={{height: '500px', width: '100%'}} />
    <div style={{height: '500px', width: '100%'}} />
    <p id="test-link">I'm here!</p>
  </div>
)

Page.getInitialProps = async ({ query, req }) => {
  console.log('getInitialProps')
  return {}
}

export default Page 