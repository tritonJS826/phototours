FROM grafana/grafana:11.5.2

# Create directories
RUN mkdir -p /etc/grafana/provisioning/dashboards \
    && mkdir -p /etc/grafana/provisioning/datasources \
    && mkdir -p /var/lib/grafana/dashboards/general \
    && mkdir -p /var/lib/grafana/dashboards/databases

# Copy configuration files
COPY provisioning/dashboards/ /etc/grafana/provisioning/dashboards/
COPY provisioning/datasources/ /etc/grafana/provisioning/datasources/
COPY dashboards/general/ /var/lib/grafana/dashboards/general/
COPY dashboards/databases/ /var/lib/grafana/dashboards/databases/
COPY grafana.ini /etc/grafana/grafana.ini

COPY provisioning/ /etc/grafana/provisioning/

# Set permissions
USER root
RUN chown -R 472:472 /etc/grafana/provisioning/ /var/lib/grafana/dashboards/
