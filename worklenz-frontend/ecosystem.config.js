module.exports = {
  apps: [
    {
      name: 'worklenz-frontend',
      script: 'npm',
      args: 'run start',  // Esto ejecutará "npm run start" (el comando configurado en tu package.json)
      cwd: '/WorkLenz/worklenz-frontend', // Asegúrate de que esta sea la ruta correcta
      env: {
        NODE_ENV: 'production',
      },
    }
  ]
}
