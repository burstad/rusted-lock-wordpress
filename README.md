rustedLock-wordpress
===============

wordpress website for Rusted Lock Escape rooms.

# rustedLock-wordpress

WordPress website for Rusted Lock Escape rooms.

## Development Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd rustedLock-wordpress
   ```
2. Start the development environment using Docker Compose:
    ```sh
    cp .env.example .env
    # Update the .env file with your environment variables
    ```
3. Start the development environment using Docker Compose:
    ```sh
    docker compose up -d
    ```
## Deployment
Deployment is triggered via GitBucket and uses Docker Compose with a Cloudflare tunnel.