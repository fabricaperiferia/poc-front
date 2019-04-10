pipeline {
	agent any
	stages {
		stage('Build Info') {
		    steps {
			echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
		    }
		}
		stage('Build and Test Image') {
		    steps {
			sh "docker build -f Dockerfile -t periferiafactory/front:v$BUILD_NUMBER ."
		    }
		}
		stage('Push Image') {
			steps {
				withDockerRegistry([ credentialsId: "docker", url: "" ]) {
					sh 'docker push periferiafactory/front:v$BUILD_NUMBER'
				}
			}
	    	}
		stage('K8 Update') {
			steps {
				sh 'kubectl -n demo-ath  --record deployment.apps/front-deployment set image deployment.v1.apps/front-deployment front=periferiafactory/front:v$BUILD_NUMBER'
			}
		}
	}
}
