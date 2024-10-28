import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>fbvideodownload.com.br</h1>

          <br />
          <h2 style={{ textAlign: 'center' }}>Em breve.</h2>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
