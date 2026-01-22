---
date: '2024-10-01'
title: 'Senior Backend Engineer'
company: 'DNI pay'
range: 'Oct 2024 – Aug 2025'
url: 'https://dnipay.ng'
---
- Multi-Provider Fintech Architecture: Built a provider-agnostic billing engine in Go that routes transactions across 5+ upstreams. Designed a "flow" abstraction layer to unify business logic, ensuring redundancy and 99.99% uptime.
- Financial Integrity: Implemented idempotent transaction processing with row-level locking in Postgres to prevent double-spending. Scaled system to handle ₦5B+ monthly volume with zero financial discrepancies.
- Async Processing & Reporting: Engineered a concurrent worker pool using RabbitMQ and headless Chrome (chromedp) for generating PDF account statements. Implemented graceful shutdowns via context cancellation and retry logic with non-retry classification for auth errors.
- Infrastructure & DevOps: Orchestrated production infrastructure using Coolify on Linode instances, creating a cost-efficient self-hosted PaaS. Implemented GitHub Actions for CI/CD, enabling zero-downtime deployments and reducing incident recovery times to under 5 minutes.
