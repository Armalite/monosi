import json
import logging
import requests
import sys

from flask import request


class SlackIntegration:
    @classmethod
    def configuration_schema(cls):
        return {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "title": "Slack Webhook URL",
                },
            }
        }

    @classmethod
    def _create_request_data(cls, metric):
        body = {
            "text": "Danny Torrence left a 1 star review for your property.",
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Monosi - Anomaly Detected",
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "*Type:*\nTable Health",
                        },
                        {
                            "type": "mrkdwn",
                            "text": "*Table:*\n{}.{}.{}".format(metric.database, metric.schema, metric.table_name)
                        },
                    ],
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": "*Column:*\n{}".format(metric.column_name),
                        },
                        {
                            "type": "mrkdwn",
                            "text": "*Metric:*\n{}".format(metric.metric),
                        }
                    ]
                },
                # {
                #     "type": "section",
                #     "text": {
                #         "type": "mrkdwn",
                #         "text": " ",
                #     },
                #     "accessory": {
                #         "type": "button",
                #         "text": {
                #             "type": "plain_text",
                #             "text": "Learn More",
                #             "emoji": "true",
                #         },
                #         "url": "{}/monitors/{}/metrics?column_name={}&metric={}".format(request.base_url)
                #     }
                # }
            ]
        }
        byte_length = str(sys.getsizeof(body))
        headers = {'Content-Type': 'application/json', 'Content-Length': byte_length}

        return headers, json.dumps(body)

    @classmethod
    def send(cls, message, config):
        url = config['url']
        headers, data = cls._create_request_data(message)
        
        try:
            response = requests.post(url, data=data, headers=headers)
            
            if response.status_code != 200:
                raise Exception(response.status_code, response.text)
        except Exception as e:
            logging.error("Request to Slack webhook URL {} failed.".format(url))
            raise e



