node {
    stage('Install Dependencies') {
        docker.image('node:18').inside {
            sh 'npm install'
        }
    }

    stage('Run Tests') {
        docker.image('node:18').inside {
            sh 'npm test'
        }
    }

    stage('Build Docker Image') {
        script {
            dockerImage = docker.build('sungodnika7/nodejs-jenkins-app')
        }
    }

    stage('Push to DockerHub') {
        withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
            script {
                dockerImage.push('latest')
            }
        }
    }
}
