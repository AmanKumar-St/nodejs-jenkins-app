node {
    stage('Check Node Version') {
        docker.image('node:18').inside {
            sh 'node -v'
            sh 'npm -v'
        }
    }
}
