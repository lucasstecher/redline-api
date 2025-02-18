# Redline API

Making you car dealership run shoothly!

## FRs (Functional Requirements)
- [ ] User must be able to register (name, password, email, and phone number).
- [ ] User must be able to authenticate (login/logout).
- [ ] Users must have different roles: `admin` and `customer`.
- [ ] User must be able to browse available vehicles.
- [ ] User must be able to filter vehicles by brand, model, price, year, and fuel type.
- [ ] User must be able to compare two or more vehicles.
- [ ] User must be able to schedule a test drive.
- [ ] User must receive a confirmation notification for a scheduled test drive.
- [ ] User must be able to simulate financing options for a selected vehicle.
- [ ] User must be able to complete a vehicle purchase.
- [ ] Admin must be able to add, edit, and remove vehicles from the inventory.
- [ ] Admin must be able to manage test drive requests (approve, reschedule, cancel).
- [ ] Admin must be able to track sales performance.
- [ ] Admin must be able to monitor vehicle stock levels and receive alerts for low inventory.
- [ ] Admin must be able to create and manage promotional campaigns.
- [ ] Admin must be able to send notifications and messages to users.
- [ ] Admin must have access to analytics and reports.
- [ ] The system must store purchase history for customers.
- [ ] The system must support multiple payment methods (credit card, bank transfer, etc.).
- [ ] The system must generate receipts for completed transactions.
- [ ] The system must support real-time communication (chat between customers and sales agents).

## BRs (Business Requirements)
- [ ] The platform must increase monthly sales by at least 20%.
- [ ] Customers should have a seamless experience navigating and purchasing vehicles.
- [ ] Inventory levels must be monitored to prevent stockouts.
- [ ] All transactions must comply with local data protection laws (e.g., GDPR, LGPD).
- [ ] The platform should automate key processes such as test drive scheduling and financing simulations.
- [ ] The system must support promotional events and limited-time offers.
- [ ] The system should provide valuable insights into sales trends and customer preferences.

## NFRs (Non-Functional Requirements)
- **Performance**
  - [ ] The system must handle up to 1000 concurrent requests without performance degradation.
  - [ ] Vehicle searches must return results in under 2 seconds.

- **Scalability**
  - [ ] The architecture must allow for horizontal scaling.
  - [ ] The system must support up to 1 million users.

- **Security**
  - [ ] All sensitive data must be encrypted (passwords, financial data).
  - [ ] The system must be protected against common attacks (SQL Injection, XSS, CSRF).
  - [ ] Authentication must use JWT with OAuth2 support.

- **Availability**
  - [ ] The system must guarantee 99.9% uptime.

- **Maintainability**
  - [ ] The codebase must follow clean architecture principles (SOLID, modular structure).
  - [ ] All API endpoints must be well-documented.

- **Compatibility**
  - [ ] The system must support all major browsers (Chrome, Firefox, Edge, Safari).
  - [ ] The front-end must be mobile-friendly (PWA or responsive design).

- **Monitoring & Logging**
  - [ ] The system must include monitoring tools (Prometheus, Grafana).
  - [ ] All critical actions must be logged and stored securely.

- **Portability**
  - [ ] The system must be deployable using Docker and Kubernetes.

- **Internationalization (i18n)**
  - [ ] The system must support multiple languages (initially English and Portuguese).

- **Backup & Recovery**
  - [ ] The system must perform daily automatic backups.