package sen.saloum.JobConnect.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.MessageDto;
import sen.saloum.JobConnect.model.Message;
import sen.saloum.JobConnect.model.User;
import sen.saloum.JobConnect.repos.MessageRepository;
import sen.saloum.JobConnect.repos.UserRepository;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    public MessageDto sendMessage(MessageDto dto) {

        if (dto.getSenderId() == null || dto.getRecipientId() == null) {
            throw new IllegalArgumentException("SenderId and RecipientId must not be null");
        }

        Message message = new Message();
        BeanUtils.copyProperties(dto, message);

        User sender = userRepository.findById(dto.getSenderId())
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        User recipient = userRepository.findById(dto.getRecipientId())
                .orElseThrow(() -> new RuntimeException("Recipient not found"));

        message.setSender(sender);
        message.setRecipient(recipient);
        message.setSentAt(OffsetDateTime.now());
        message.setRead(false);

        if (dto.getParentMessageId() != null) {
            Message parentMessage = messageRepository.findById(dto.getParentMessageId())
                    .orElseThrow(() -> new RuntimeException("Parent message not found"));
            message.setParentMessage(parentMessage);
        }

        Message saved = messageRepository.save(message);
        return toDto(saved);
    }

    public List<MessageDto> getConversation(Long senderId, Long recipientId) {
        List<Message> messages = messageRepository.findConversationBetweenUsers(senderId, recipientId);
        return messages.stream().map(this::toDto).collect(Collectors.toList());
    }

    private MessageDto toDto(Message message) {
        MessageDto dto = new MessageDto();
        dto.setId(message.getId());
        dto.setSenderId(message.getSender().getId());
        dto.setSenderUsername(message.getSender().getUsername());
        dto.setRecipientId(message.getRecipient().getId());
        dto.setRecipientUsername(message.getRecipient().getUsername());
        dto.setContent(message.getContent());
        dto.setSentAt(message.getSentAt());
        dto.setRead(message.isRead());
        if (message.getParentMessage() != null) {
            dto.setParentMessageId(message.getParentMessage().getId());
        }

        return dto;
    }
}
