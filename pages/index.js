import Link from 'next/link'

const Page = () => (
  <div>
    <p>Welcome to next.js!</p>
    <Link href="#test-link">
      <a>go somewhere</a>
    </Link>
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